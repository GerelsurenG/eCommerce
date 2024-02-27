import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { createContext, useState } from "react";

export const ApplicationContext = createContext({
  basket: [],
  setBasket: () => {},
});

export default function Layout(props) {
  const { children } = props;
  const [basket, setBasket] = useState([]);
  return (
    <ApplicationContext.Provider value={{ basket, setBasket }}>
      <Header></Header>
      {children}
      <Footer></Footer>
    </ApplicationContext.Provider>
  );
}
