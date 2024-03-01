import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "./Layout.jsx";
import Profile from "../components/auth/Profile.jsx";

export default function Header() {
  const { basket } = useContext(ApplicationContext);

  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <Link to="/" className="logo">
                  <img src="/images/logo.png" />
                </Link>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <Link to="/" /* className="active" */>Home</Link>
                  </li>
                  <li className="submenu">
                    <Link to="/">Pages</Link>
                    <ul>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/">Products</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <Link to="/shopping-card">Shop :{basket.length}</Link>
                  </li>
                  <Profile />
                </ul>
                <div className="menu-trigger">
                  <span>Menu</span>
                </div>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
