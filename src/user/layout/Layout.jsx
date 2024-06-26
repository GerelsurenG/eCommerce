import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const ApplicationContext = createContext({
  basket: [],
  setBasket: () => {},
  action: [],
  setAction: () => {},
});

/*    sanity project_id bolon token-iig env-ees huwisagchaar avj bolno */
const project_id = "r8x246y8";
const project_token =
  "skePr8ArVN6qfsNiNhVFlmBQCwEJfXhEH6zCx4A6c754jRmAgKvlHgNDgxQEwVlXQNcK3Eil6iUkkMseH0jwWbjYSE7bbG9x4WND4qVf8oXvzDDoS3L2EojuqlDCFGnu1xkbYvG7Bt4ZvF95OD4tyCWP4Oc70Q1nJJjh1AV72eTbONIUWVtx";

function updateDataToSanity(mutations) {
  fetch(
    "https://" +
      project_id +
      ".api.sanity.io/v2022-03-07/data/mutate/production",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + project_token,
      },
      body: JSON.stringify({ mutations }),
    }
  );
}

export default function Layout(props) {
  const { children } = props;
  const [basket, setBasket] = useState([]);
  const { user } = useAuth0();
  const [action, setAction] = useState([]);

  let newAction;
  const setToAction = (userId, act, target) => {
    newAction = {
      actionId: `${Math.random().toString(36).substring(2, 9)}`,
      type: act,
      target: target,
      userId: user.sub,
      date: new Date().toISOString(),
    };
    setAction([...action, newAction]);
    console.log("action show");
    console.log(action);
  };

  const addToBasket = (product, quantity) => {
    if (!user) {
      alert("Та нэвтэрнэ үү!");
      return;
    }

    const existingProduct = basket.find(
      (item) => item.productId === product.id
    );

    let newOrUpdatedItem;

    if (existingProduct) {
      //return;
      existingProduct.productQuantity += quantity;
      existingProduct.productTotalPrice =
        parseInt(product.price) * existingProduct.productQuantity;
      newOrUpdatedItem = existingProduct;
      setBasket([...basket]);
      console.log("action nemeh");
      setToAction(user.sub, "nemeh", "home");
    } else {
      newOrUpdatedItem = {
        _id: `${Math.random().toString(36).substring(2, 9)}`,
        _type: "basket",
        productId: product.id,
        productName: product.title,
        productPrice: product.price,
        productTotalPrice: parseInt(product.price) * parseInt(quantity),
        productQuantity: quantity,
        userId: user.sub,
      };
      setBasket([...basket, newOrUpdatedItem]);
      console.log("action update");
      setToAction(user.sub, "update", "home");
    }
    const mutations = [
      {
        createOrReplace: newOrUpdatedItem,
      },
    ];
    updateDataToSanity(mutations);
  };

  const updateBasketItem = (basketItem, quantity) => {
    const existingItem = basket.find(
      (item) => item.productId === basketItem.productId
    );

    existingItem.productQuantity = quantity;

    setBasket([...basket]);

    const mutations = [
      {
        createOrReplace: existingItem,
      },
    ];

    updateDataToSanity(mutations);
  };

  const removeFromBasket = (product) => {
    setBasket(basket.filter((item) => item.productId !== product.productId));

    const mutations = [
      {
        delete: {
          id: product._id,
        },
      },
    ];
    updateDataToSanity(mutations);
    console.log("action delete");
    setToAction(user.sub, "delete", "home");
  };

  useEffect(() => {
    if (!user) {
      return;
    }

    const query = `*[_type=='basket' && userId=='${user.sub}']`;

    fetch(
      `https://${project_id}.api.sanity.io/v2022-03-07/data/query/production?query=${encodeURIComponent(
        query
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${project_token}`,
        },
      }
    ).then((response) => {
      response.json().then((data) => {
        if (!data.error) {
          setBasket(data.result);
          console.log(basket);
        }
      });
    });
  }, [user]);

  return (
    <ApplicationContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        updateBasketItem,
        action,
        setToAction,
      }}
    >
      <Header></Header>
      {children}
      <Footer></Footer>
    </ApplicationContext.Provider>
  );
}
