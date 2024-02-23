import { useEffect, useState } from 'react'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import './assets/css/templatemo-hexashop.css'
import './assets//css/owl-carousel.css'
import './assets/css/lightbox.css'
import Product from './components/Product.jsx'

function App() {
  //const [count, setCount] = useState(0)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=9')
    .then((response) => response.json())
    .then((data) => {
      setProducts(data.products);
    });
  },[]);

  return (
    <>
    {/*   <!-- ***** Products Area Starts ***** --> */}
    <section className="section" id="products">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>Our Latest Products</h2>
                        <span>Check out all of our products.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
              {
                products.map((product) => (
                  <Product product = {product} key={product.id}/>
                ))
              }
            </div>
        </div>
    </section>
   {/*  <!-- ***** Products Area Ends ***** --> */}
    </>
  )
}

export default App
