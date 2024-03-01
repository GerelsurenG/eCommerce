import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
/* import {createBrowserRouter, RouterProvider,} from "react-router-dom"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./user/pages/index.jsx";
import About from "./user/pages/about.jsx";
import Contact from "./user/pages/contact.jsx";
import Product from "./user/pages/product.jsx";
import Layout from "./user/layout/Layout.jsx";
import ShoppingCard from "./user/pages/shopping-card.jsx";
/* const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "*",
    element:<h1>404 - Not Found Page</h1>,
  },
  {
    path: "/about",
    element:<About/>,
  },
  {
    path: "/contact",
    element:<Contact/>,
  },
  {
    path: "/product/:id",
    element:<Product/>,
  },
]); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-475hzqujp3aw0ib0.us.auth0.com"
      clientId="jWkoU0va5CdpoXRlwBWkC61MTuAeBKjn"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {/*    <Layout>
        <RouterProvider router={router} />
      </Layout> */}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/shopping-card" element={<ShoppingCard />} />
            <Route path="*" element={<h1>404 - Not Found Page</h1>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
