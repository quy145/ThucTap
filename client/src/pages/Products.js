import React, { useState, useEffect } from "react";
import Layout from '../components/layout/Layout'
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import Favoritebooks from "../components/Favoritebooks";

const ProductsList = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useCart();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    //get all cat
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/api/v1/category/get-category");
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllCategory();
        getTotal();
    }, []);
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

    //getTOtal COunt
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

    // filter by cat
    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id);
        } else {
            all = all.filter((c) => c !== id);
        }
        setChecked(all);
    };
    useEffect(() => {
        if (!checked.length || !radio.length) getAllProducts();
    }, [checked.length, radio.length]);

    useEffect(() => {
        if (checked.length || radio.length) filterProduct();
    }, [checked, radio]);

    //get filterd product
    const filterProduct = async () => {
        try {
            const { data } = await axios.post("/api/v1/product/product-filters", {
                checked,
                radio,
            });
            setProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Layout title={"ALl Products - Best offers "}>
            {/* <!-- Page Content  --> */}
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="iq-card-transparent mb-0">
                                <div className="d-block text-center">
                                    <h2 className="mb-3">Filter Book</h2>
                                    <div className="w-100 iq-search-filter" style={{ display: 'flex', alignItems: 'center' }}>
                                        <div>
                                            <div style={{marginLeft: '-45%'}}>
                                                <h4 className="text-center mt-4" style={{marginLeft: '-20%'}}>Filter By Category</h4>
                                                {categories?.map((c) => (
                                                    <Checkbox
                                                        key={c._id}
                                                        onChange={(e) => handleFilter(e.target.checked, c._id)}
                                                    >
                                                        {c.name}
                                                    </Checkbox>
                                                ))}
                                            </div>
                                            {/* price filter */}
                                            <div style={{marginLeft: '-2%'}}>
                                                <h4 className="text-center mt-4" style={{marginLeft: '-76%'}}>Filter By Price</h4>
                                                <div className="d-flex">
                                                    <Radio.Group style={{ display: 'flex' }} onChange={(e) => setRadio(e.target.value)}>
                                                        {Prices?.map((p) => (
                                                            <div key={p._id}>
                                                                <Radio value={p.array}>{p.name}</Radio>
                                                            </div>
                                                        ))}
                                                    </Radio.Group>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column" style={{margin: '30px 0px 0px 81px'}}>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => window.location.reload()}
                                            >
                                                RESET FILTERS
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="iq-card iq-card-block iq-card-stretch">
                            <div className="iq-card-body" style={{backgroundColor: "white"}}>
                                <div className="row">
                                    {products?.map((p) => (
                                        <div className="col-sm-6 col-md-4 col-lg-3">
                                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height browse-bookcontent">
                                                <div className="iq-card-body p-0">
                                                    <div className="d-flex align-items-center">
                                                        <div className="col-6 p-0 position-relative image-overlap-shadow">
                                                            <a><img className="img-fluid rounded w-100" src={`/api/v1/product/product-photo/${p._id}`} alt={p.name} /></a>
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
                        <Favoritebooks />
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default ProductsList