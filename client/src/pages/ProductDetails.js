import React, { useState, useEffect } from "react";
import Layout from '../components/layout/Layout'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
// import "../styles/ProductDetailsStyles.css";
import toast from "react-hot-toast";
import Favoritebooks from "../components/Favoritebooks";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      {/* <!-- Page Content  --> */}
      <div id="content-page" className="content-page" style={{paddingTop: "60px"}}>
        <h2 style={{textAlign: 'center'}}>Product Detail</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header d-flex justify-content-between align-items-center">
                  <h4 className="card-title mb-0">Thông tin</h4>
                </div>
                <div className="iq-card-body pb-0">
                  <div className="description-contens align-items-top row">
                    <div className="col-md-6">
                      <div className="iq-card-transparent iq-card-block iq-card-stretch iq-card-height">
                        <div className="iq-card-body p-0">
                          <div className="row align-items-center" style={{width: "700px"}}> 
                            <div className="col-9">
                              <ul id="description-slider" className="list-inline p-0 m-0  d-flex align-items-center">
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src={`/api/v1/product/product-photo/${product._id}`} className="img-fluid rounded" alt={product.name} style={{width: "700px"}} />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="iq-card-transparent iq-card-block iq-card-stretch iq-card-height">
                        <div className="iq-card-body p-0">
                          <h3 className="mb-3">{product.name}</h3>
                          <div className="price d-flex align-items-center font-weight-500 mb-2">
                            <span className="font-size-20 pr-2 old-price"> $ 350.000 </span>
                            <span className="font-size-24 text-dark">{product?.price?.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}</span>
                          </div>
                          <div className="mb-3 d-block">
                            <span className="font-size-20 text-warning">
                              <i className="fa fa-star mr-1" />
                              <i className="fa fa-star mr-1" />
                              <i className="fa fa-star mr-1" />
                              <i className="fa fa-star mr-1" />
                              <i className="fa fa-star" />
                            </span>
                          </div>
                          <span className="text-dark mb-4 pb-4 iq-border-bottom d-block" style={{maxHeight: '4,6em', overflow: 'hidden'}}>{product.description}</span>
                          <div className="text-primary mb-4">Danh mục: <span className="text-body">{product?.category?.name}</span></div>
                          <div className="text-primary mb-4">Tác giả: <span className="text-body">{product.author}</span></div>
                          <div className="mb-4 d-flex align-items-center">
                            <a onClick={() => {
                              setCart([...cart, product]);
                              localStorage.setItem(
                                "cart",
                                JSON.stringify([...cart, product])
                              );
                              toast.success("Item Added to cart");
                            }} className="btn btn-primary view-more mr-2">Thêm vào giỏ hàng</a>
                            <a href="book-pdf.html" className="btn btn-primary view-more mr-2">Mua ngay</a>
                          </div>
                          <div className="mb-3">
                            <a href="#" className="text-body text-center"><span className="avatar-30 rounded-circle bg-primary d-inline-block mr-2"><i className="ri-heart-fill" /></span><span>Thêm vào danh sách yêu thích</span></a>
                          </div>
                          <div className="iq-social d-flex align-items-center">
                            <h5 className="mr-2">Chia sẻ:</h5>
                            <ul className="list-inline d-flex p-0 mb-0 align-items-center">
                              <li>
                                <a href="#" className="avatar-40 rounded-circle bg-primary mr-2 facebook"><i className="fa fa-facebook" aria-hidden="true" /></a>
                              </li>
                              <li>
                                <a href="#" className="avatar-40 rounded-circle bg-primary mr-2 twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
                              </li>
                              <li>
                                <a href="#" className="avatar-40 rounded-circle bg-primary mr-2 youtube"><i className="fa fa-youtube-play" aria-hidden="true" /></a>
                              </li>
                              <li>
                                <a href="#" className="avatar-40 rounded-circle bg-primary pinterest"><i className="fa fa-pinterest-p" aria-hidden="true" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header d-flex justify-content-between align-items-center position-relative">
                  <div className="iq-header-title">
                    <h4 className="card-title mb-0">Sản phẩm tương tự</h4>
                  </div>
                  <div className="iq-card-header-toolbar d-flex align-items-center">
                    <a href="category.html" className="btn btn-sm btn-primary view-more">Xem thêm</a>
                  </div>
                </div>
                <div className="iq-card-body single-similar-contens">
                  {relatedProducts.length < 1 && (
                    <p className="text-center">No Similar Products found</p>
                  )}
                  <ul id="single-similar-slider" className="list-inline p-0 mb-0 row">
                    {relatedProducts?.map((p) => (
                      <li className="col-md-3">
                        <div className="row align-items-center">
                          <div className="col-5">
                            <div className="position-relative image-overlap-shadow">
                              <a href="javascript:void();"><img className="img-fluid rounded w-100" src={`/api/v1/product/product-photo/${p._id}`} /></a>
                              <div className="view-book">
                                <a onClick={() => navigate(`/product/${p.slug}`)} className="btn btn-sm btn-white">Xem thêm</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-7 pl-0">
                            <h6 className="mb-2">{p.name}...</h6>
                            <p className="text-body">Dịch giả : Lê Quốc Phương</p>
                            <a href="#" className="text-dark" tabIndex={-1}>Đọc ngay<i className="ri-arrow-right-s-line" /></a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>           
           <Favoritebooks />
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default ProductDetails;