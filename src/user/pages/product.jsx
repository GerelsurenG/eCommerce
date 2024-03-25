import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import PageHeading from "../components/PageHeading.jsx";
import { ApplicationContext } from "../layout/Layout.jsx";
import useData from "../customHooks/useData.jsx";

function calculatePrice(price, per) {
  return price * per;
}

export default function Product() {
  const { addToBasket } = useContext(ApplicationContext);
  const params = useParams();

  /*  custom hook bolgoj componenthoots dotor bichlee  
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/product/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []); */
  const { data: product, loading } = useData(
    "https://dummyjson.com/product/" + params.id
  );

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (product && product.price) {
      setTotal(product.price); // Ашиглах утга байгаа бол нэмэх
    }
  }, [product]);

  if (loading) {
    return <div>...</div>;
  }

  return (
    <>
      <PageHeading pageName={"Product"}></PageHeading>
      <section className="section" id="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-images">
                {product.images.map((image, index) => (
                  <img key={index} src={image} alt="" />
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4>{product.title}</h4>
                <span className="price">Price: ${product.price}</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
                <span>{product.description}</span>
                <div className="quote">
                  <i className="fa fa-quote-left" />
                  <p>{product.description}</p>
                </div>
                <div className="quantity-content">
                  <div className="left-content">
                    <h6>No. of Orders</h6>
                  </div>
                  <div className="right-content">
                    <div className="quantity buttons_added">
                      <input
                        type="button"
                        defaultValue="-"
                        className="minus"
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity((prevQuantity) => prevQuantity - 1);
                            setTotal(
                              calculatePrice(
                                parseInt(product.price),
                                parseInt(quantity - 1)
                              )
                            );
                          } else if (quantity == 1) {
                            setTotal(
                              calculatePrice(
                                parseInt(product.price),
                                parseInt(quantity)
                              )
                            );
                          }
                        }}
                      />
                      <input
                        type="number"
                        step={1}
                        min={1}
                        max=""
                        name="quantity"
                        value={quantity}
                        /* onChange={(e) => setQuantity(parseInt(e.target.value))} */
                        //defaultValue={quantity ? quantity : 1}
                        title="Qty"
                        className="input-text qty text"
                        size={4}
                        pattern=""
                        inputMode=""
                        // readOnly={!!quantity}
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="plus"
                        onClick={() => {
                          setQuantity((prevQuantity) => prevQuantity + 1);
                          setTotal(
                            calculatePrice(
                              parseInt(product.price),
                              parseInt(quantity + 1)
                            )
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="total">
                  <h4>Total: ${total}</h4>
                  <div className="main-border-button">
                    <a
                      href="#"
                      onClick={() => {
                        addToBasket(product, quantity);
                      }}
                    >
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
