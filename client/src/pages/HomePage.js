import React, { useState, useEffect } from "react";
import Layout from '../components/layout/Layout'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import BestSeller from "../components/BestSeller";
import Quantitycate from "../components/Quantitycate";
import Favoritebooks from "../components/Favoritebooks";
import Slide from "../components/Slide";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


  
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts()
  }, []);

  //getTotal Count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout title={"ALL Products - Best offers "}>


      {/* <!-- Page Content  --> */}
      <div id="content-page" className="content-page">
        <div className="container-fluid">
          <div className="row">
            <Slide />
            <div className="col-lg-12">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header d-flex justify-content-between align-items-center position-relative">
                  <div className="iq-header-title">
                    <h4 className="card-title mb-0">Gợi ý cho bạn</h4>
                  </div>
                  <div className="iq-card-header-toolbar d-flex align-items-center">
                    <a href="category.html" className="btn btn-sm btn-primary view-more">Xem Thêm</a>
                  </div>
                </div>
                <div className="iq-card-body">
                  <div className="row">
                    {products?.map((p) => (

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="iq-card iq-card-block iq-card-stretch iq-card-height browse-bookcontent">
                          <div className="iq-card-body p-0">
                            <div className="d-flex align-items-center">
                              <div className="col-6 p-0 position-relative image-overlap-shadow">
                                <a><img style={{width: '124px', height: '166px'}} className="img-fluid rounded w-100" src={`/api/v1/product/product-photo/${p._id}`} alt={p.name} /></a>
                                <div className="view-book">
                                  <a onClick={() => navigate(`/product/${p.slug}`)} className="btn btn-sm btn-white">Mua Ngay</a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="mb-2">
                                  <h6 className="mb-1">{p.name}</h6>
                                  <p className="font-size-13 line-height mb-1"> {p.description.substring(0, 30)}...</p>
                                  <div className="d-block line-height">
                                    <span className="font-size-11 text-warning">
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                    </span>
                                  </div>
                                </div>
                                <div className="price d-flex align-items-center">
                                  <h6><b> $ {p.price}</b></h6>
                                </div>
                                <div className="iq-product-action">
                                  <a onClick={() => {
                                    setCart([...cart, p]);
                                    localStorage.setItem(
                                      "cart",
                                      JSON.stringify([...cart, p])
                                    );
                                    toast.success("Item Added to cart");
                                  }}><i className="ri-shopping-cart-2-fill text-primary" /></a>
                                  <a className="ml-2"><i className="ri-heart-fill text-danger" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="m-2 p-3">
                    {products && products.length < total && (
                      <button
                        className="btn btn-warning"
                        onClick={(e) => {
                          e.preventDefault();
                          setPage(page + 1);
                        }}
                      >
                        {loading ? "Loading ..." : "Loadmore"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <BestSeller />
            <Quantitycate />
            <Favoritebooks />
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default HomePage;