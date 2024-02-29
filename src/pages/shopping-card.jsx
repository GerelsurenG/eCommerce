import { useContext } from "react";
import { ApplicationContext } from "../layout/Layout";
import { Link } from "react-router-dom";

export default function ShoppingCard() {
  const { basket, removeFromBasket, updateBasketItem } =
    useContext(ApplicationContext);
  return (
    <>
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Сагс</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Сагс</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5 mt-n2 mt-md-n3">
          <div className="row">
            <div className="col-xl-9 col-md-8">
              <h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-light">
                <span>Бүтээгдэхүүний жагсаалт</span>
                <Link className="font-size-sm" to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-left"
                    style={{ width: "1rem", height: "1rem" }}
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  Үргэлжлүүлэх
                </Link>
              </h2>

              {/* Item*/}
              {basket.map((item, index) => (
                <div
                  key={index}
                  className="d-sm-flex justify-content-between my-4 pb-4 border-bottom"
                >
                  <div className="media d-block d-sm-flex text-center text-sm-left">
                    <a className="cart-item-thumb mx-auto mr-sm-4" href="#">
                      <img
                        src="https://www.bootdey.com/image/240x240/FF0000/000000"
                        alt="Product"
                      />
                    </a>
                    <div className="media-body pt-3">
                      <h3 className="product-card-title font-weight-semibold border-0 pb-0">
                        <a href="#">{item.productName}</a>
                      </h3>
                      <div className="font-size-lg text-primary pt-2">
                        ${item.productPrice}
                      </div>
                    </div>
                  </div>
                  <div
                    className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left"
                    style={{ maxWidth: "10rem" }}
                  >
                    <div className="form-group mb-2">
                      <label htmlFor="quantity1">Тоо хэмжээ</label>
                      <input
                        className="form-control form-control-sm"
                        type="number"
                        id="quantity1"
                        onChange={(e) => {
                          updateBasketItem(item, parseInt(e.target.value));
                        }}
                        value={item.productQuantity}
                      />
                    </div>
                    <button
                      onClick={() => removeFromBasket(item)}
                      className="btn btn-outline-danger btn-sm btn-block mb-2"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-trash-2 mr-1"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1={10} y1={11} x2={10} y2={17} />
                        <line x1={14} y1={11} x2={14} y2={17} />
                      </svg>
                      Хасах
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
