import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="first-item">
                <div className="logo">
                  <img
                    src="/images/white-logo.png"
                    alt="hexashop ecommerce templatemo"
                  />
                </div>
                <ul>
                  <li>
                    <a href="#">
                      16501 Collins Ave, Sunny Isles Beach, FL 33160, United
                      States
                    </a>
                  </li>
                  <li>
                    <a href="#">hexashop@company.com</a>
                  </li>
                  <li>
                    <a href="#">010-020-0340</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <h4>Shopping &amp; Categories</h4>
              <ul>
                <li>
                  <Link to="/">Products</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4>About Us</h4>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4>Help &amp; Information &amp; Contact</h4>
              <ul>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-12">
              <div className="under-footer">
                <p>
                  Copyright © 2024 HexaShop Co., Ltd. All Rights Reserved.
                  <br />
                  Design:{" "}
                  <a
                    href="https://templatemo.com"
                    target="_parent"
                    title="free css templates"
                  >
                    TemplateMo
                  </a>
                  <br />
                  Distributed By:{" "}
                  <a
                    href="https://themewagon.com"
                    target="_blank"
                    title="free & premium responsive templates"
                  >
                    ThemeWagon
                  </a>
                </p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
