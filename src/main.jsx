import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Product from './pages/product.jsx'
const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
