import React from 'react'
import ReactDOM from 'react-dom/client'
/* import {createBrowserRouter, RouterProvider,} from "react-router-dom"; */
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Index from './pages/index.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Product from './pages/product.jsx'
import Layout from './layout/Layout.jsx'
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/*    <Layout>
        <RouterProvider router={router} />
      </Layout> */}
    <BrowserRouter>
      <Layout>
       <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='*' element={<h1>404 - Not Found Page</h1>}/>
       </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
