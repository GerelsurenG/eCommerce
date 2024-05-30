import { useContext, useState } from "react";
import { ApplicationContext } from "../layout/Layout";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function ShoppingCard() {
  const { basket, removeFromBasket, updateBasketItem } =
    useContext(ApplicationContext);

  const { action, setToAction } = useContext(ApplicationContext);
  const { user } = useAuth0();
  return (
    <>
      <section className="section" id="products">
        <div className="container">
          <div className="row" style={{ marginTop: "5%" }}>
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
              <h2 className="h6 d-flex flex-wrap justify-content-end align-items-center px-4 py-3 bg-light">
                <span>Нийт үнэ: </span>
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
                        Price: ${item.productPrice}
                      </div>
                      <div className="font-size-lg text-primary pt-2">
                        Total: ${item.productTotalPrice || "-"}
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
                        step={1}
                        min={1}
                        max=""
                        onChange={(e) => {
                          let oldItem = item;
                          oldItem.productTotalPrice =
                            parseInt(oldItem.productPrice) *
                            parseInt(e.target.value);
                          updateBasketItem(oldItem, parseInt(e.target.value));
                          setToAction(user.sub, "oorchloh", "card");
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

      <section className="section" id="action">
        <div className="container">
          <div className="row" style={{ marginTop: "5%" }}>
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>action</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5 mt-n2 mt-md-n3">
          <div className="row">
            <div className="col-xl-9 col-md-8">
              {action.map((item, index) => (
                <div
                  key={index}
                  className="d-sm-flex justify-content-between my-4 pb-4 border-bottom"
                >
                  <div className="media d-block d-sm-flex text-center text-sm-left">
                    <div className="media-body pt-3">
                      <h3 className="product-card-title font-weight-semibold border-0 pb-0">
                        <a href="#"></a>
                      </h3>
                      <div className="font-size-lg text-primary pt-2">
                        userId: {item.userId}
                      </div>
                      <div className="font-size-lg text-primary pt-2">
                        action:{item.type}
                      </div>
                      <div className="font-size-lg text-primary pt-2">
                        target:{item.target}
                      </div>
                      <div className="font-size-lg text-primary pt-2">
                        date:{item.date}
                      </div>
                    </div>
                  </div>
                  <div
                    className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left"
                    style={{ maxWidth: "10rem" }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
