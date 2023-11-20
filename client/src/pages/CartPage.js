import React, { useEffect, useState } from "react";
import Layout from '../components/layout/Layout'
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post("/api/v1/product/braintree/payment", {
        nonce,
        cart,
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* <!-- Page Content  --> */}
      <div id="content-page" className="content-page">
        <h1 className="text-center bg-light p-2 mb-1">
          {!auth?.user
            ? "Hello Guest"
            : `Hello  ${auth?.token && auth?.user?.name}`}
          <p className="text-center">
            {cart?.length
              ? `You Have ${cart.length} items in your cart ${auth?.token ? "" : "please login to checkout !"
              }`
              : " Your Cart Is Empty"}
          </p>
        </h1>
        <div className="container-fluid checkout-content">
          <div className="row">
            <div id="cart" className="card-block show p-0 col-12">
              <div className="row align-item-center">
                <div className="col-lg-8">
                  <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between iq-border-bottom mb-0">
                      <div className="iq-header-title">
                        <h4 className="card-title">Giỏ hàng</h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <ul className="list-inline p-0 m-0">
                        {cart?.map((p) => (
                          <li className="checkout-product" key={p._id}>
                            <div className="row align-items-center">
                              <div className="col-sm-2">
                                <span className="checkout-product-img">
                                  <a href="javascript:void();"><img className="img-fluid rounded" src={`/api/v1/product/product-photo/${p._id}`}  /></a>
                                </span>
                              </div>
                              <div className="col-sm-4">
                                <div className="checkout-product-details">
                                  <h5>{p.name}</h5>
                                  <p className="text-success">{p.description.substring(0, 30)}</p>
                                  <div className="price">
                                    <h5>{p.price.toLocaleString("en-US", {
                                      style: "currency",
                                      currency: "USD",
                                    })}</h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="row">
                                  <div className="col-sm-10">
                                    <div className="row align-items-center mt-2">
                                      <div className="col-sm-7 col-md-6">
                                        <button type="button" className="fa fa-minus qty-btn" id="btn-minus" />
                                        <input type="text" id="quantity" defaultValue={0} />
                                        <button type="button" className="fa fa-plus qty-btn" id="btn-plus" />
                                      </div>
                                      <div className="col-sm-5 col-md-6">
                                        <span className="product-price">
                                          {p.price.toLocaleString("en-US", {
                                            style: "currency",
                                            currency: "USD",
                                          })}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-2">
                                    <a onClick={() => removeCartItem(p._id)} className="text-dark font-size-20"><i className="ri-delete-bin-7-fill" /></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="iq-card">
                    <div className="iq-card-body">
                      <p>Tùy chọn</p>
                      {auth?.user?.address ? (
                        <>
                          <div className="mb-3">
                            <h4>Current Address: </h4>
                            <h5>{auth?.user?.address}</h5>
                            <button
                              className="btn btn-outline-warning"
                              onClick={() => navigate("/dashboard/user/profile")}
                            >
                              Update Address
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="mb-3">
                          {auth?.token ? (
                            <button
                              className="btn btn-outline-warning"
                              onClick={() => navigate("/dashboard/user/profile")}
                            >
                              Update Address
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-warning"
                              onClick={() =>
                                navigate("/login", {
                                  state: "/cart",
                                })
                              }
                            >
                              Plase Login to checkout
                            </button>
                          )}
                        </div>
                      )}
                      <div className="d-flex justify-content-between">
                        <span>Phiếu giảm giá</span>
                        <span><a href="#"><strong>Áp dụng</strong></a></span>
                      </div>
                      <hr />
                      <p><b>Chi tiết</b></p>
                      <div className="d-flex justify-content-between mb-1">
                        <span>Tổng</span>
                        <span>{totalPrice()}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span>Giảm giá</span>
                        <span className="text-success"> $ 0</span>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span>Thuế VAT</span>
                        <span> $ 0</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Phí vận chuyển</span>
                        <span className="text-success">Miễn phí</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="text-dark"><strong>Tổng</strong></span>
                        <span className="text-dark"><strong>{totalPrice()}</strong></span>
                      </div>
                      {!clientToken || !auth?.token || !cart?.length ? (
                        ""
                      ) : (
                        <>
                          <DropIn
                            options={{
                              authorization: clientToken,
                              paypal: {
                                flow: "vault",
                              },
                            }}
                            onInstance={(instance) => setInstance(instance)}
                          />

                          <a
                            id="place-order"
                            className="btn btn-primary d-block mt-3 next"
                            onClick={handlePayment}
                            disabled={loading || !instance || !auth?.user?.address}
                          >
                            {loading ? "Processing ...." : "Đặt hàng"}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="iq-card ">
                    <div className="card-body iq-card-body p-0 iq-checkout-policy">
                      <ul className="p-0 m-0">
                        <li className="d-flex align-items-center">
                          <div className="iq-checkout-icon">
                            <i className="ri-checkbox-line" />
                          </div>
                          <h6>Chính sách bảo mật (Thanh toán an toàn và bảo mật.)</h6>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="iq-checkout-icon">
                            <i className="ri-truck-line" />
                          </div>
                          <h6>Chính sách giao hàng (Giao hàng tận nhà.)</h6>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="iq-checkout-icon">
                            <i className="ri-arrow-go-back-line" />
                          </div>
                          <h6>Chính sách hoàn trả</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="address" className="card-block p-0 col-12">
              <div className="row align-item-center">
                <div className="col-lg-8">
                  <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Thêm địa chỉ mới</h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <form onsubmit="required()">
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Họ và tên: *</label>
                              <input type="text" className="form-control" name="fname" required />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Số điện thoại: *</label>
                              <input type="text" className="form-control" name="mno" required />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Địa chỉ: *</label>
                              <input type="text" className="form-control" name="houseno" required />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Tỉnh/thành phố: *</label>
                              <input type="text" className="form-control" name="city" required />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Phường: *</label>
                              <input type="text" className="form-control" name="state" required />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="addtype">Loại địa chỉ</label>
                              <select className="form-control" id="addtype">
                                <option>Nhà riêng</option>
                                <option>Công ty</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <button id="savenddeliver" type="submit" className="btn btn-primary">Lưu và giao tại đây</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="iq-card">
                    <div className="iq-card-body">
                      <h4 className="mb-2">Ông Trần Thuận</h4>
                      <div className="shipping-address">
                        <p className="mb-0">11 Thành Thái</p>
                        <p>Thành phố Đà Nẵng</p>
                        <p>0789-999-999</p>
                      </div>
                      <hr />
                      <a id="deliver-address" href="javascript:void();" className="btn btn-primary d-block mt-1 next">Tiếp tục</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="payment" className="card-block p-0 col-12">
              <div className="row align-item-center">
                <div className="col-lg-8">
                  <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Lựa chọn thanh toán</h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <form className="mt-3">
                        <div className="d-flex align-items-center">
                          <span>Mã giảm giá: </span>
                          <div className="cvv-input ml-3 mr-3">
                            <input type="text" className="form-control" required />
                          </div>
                          <button type="submit" className="btn btn-primary">Tiếp tục</button>
                        </div>
                      </form>
                      <hr />
                      <div className="card-lists">
                        <div className="form-group">
                          <div className="custom-control custom-radio">
                            <input type="radio" id="credit" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="credit"> Thẻ Tín dụng / Ghi nợ / ATM</label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input type="radio" id="netbaking" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="netbaking"> Momo/ZaloPay</label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input type="radio" id="emi" name="emi" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="emi"> Trả góp</label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input type="radio" id="cod" name="cod" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="cod"> Thanh toán khi giao hàng                                        </label>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <a id="deliver-address" href="javascript:void();" className="btn btn-primary d-block mt-1 next">Thanh toán</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="iq-card">
                    <div className="iq-card-body">
                      <h4 className="mb-2">Chi tiết</h4>
                      <div className="d-flex justify-content-between">
                        <span>Giá 3 sản phẩm</span>
                        <span><strong>329.900đ</strong></span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Phí vận chuyển</span>
                        <span className="text-success">Miễn phí</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span>Số tiền phải trả</span>
                        <span><strong>329.900đ</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}
export default CartPage;