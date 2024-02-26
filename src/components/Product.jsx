import { Link } from "react-router-dom";
export default function Product(props) {
  const product = props.product;
  return (
    <div className="col-lg-4">
      <div className="item">
        <div className="thumb">
          <div className="hover-content">
            <ul>
              <li>
                <Link to={"/product/" + product.id}>
                  <i className="fa fa-eye"></i>
                </Link>
              </li>
              <li>
                <Link to={"/product/" + product.id}>
                  <i className="fa fa-star"></i>
                </Link>
              </li>
              <li>
                <Link to={"/product/" + product.id}>
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
          <img src={product.thumbnail} height={200} alt="" />
        </div>
        <div className="down-content">
          <h4>{product.title}</h4>
          <span>${product.price}</span>
          <ul className="stars">
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
