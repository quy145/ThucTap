import React from 'react'
import { Link } from 'react-router-dom'
import useCategory from '../../hooks/useCategory';

const Sidebar = () => {
    const categories = useCategory();
    return (
        <>
            {/* <!-- Sidebar  --> */}
            <div className="iq-sidebar">
                <div className="iq-sidebar-logo d-flex justify-content-between">
                    <Link to="/" href="index.html" className="header-logo">
                        <img src="https://i.pinimg.com/564x/82/af/4b/82af4bb76f88b45995b8bb3b08187b98.jpg" className="img-fluid rounded-normal"  />
                        <div className="logo-title">
                            <span className="text-primary text-uppercase">Book Store</span>
                        </div>
                    </Link>
                </div>
                <div id="sidebar-scrollbar">
                    <nav className="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" className="iq-menu">
                            <li className="active active-menu">
                                <Link to="/" className="iq-waves-effect" data-toggle="collapse" aria-expanded="true"><span className="ripple rippleEffect" /><i className="las la-home iq-arrow-left" /><span>Trang Chủ</span><i className="ri-arrow-right-s-line iq-arrow-right" /></Link>
                                <ul id="dashboard" className="iq-submenu collapse show" data-parent="#iq-sidebar-toggle">
                                </ul>
                            </li>
                            <li>
                                <a href="#ui-elements" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="lab la-elementor iq-arrow-left" /><span>Danh mục sản phẩm</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                                <ul id="ui-elements" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className="elements">
                                        <Link className="dropdown-item" to={"/categories"}>
                                            <i className="ri-play-circle-line" /><span>All Categories</span><i className="ri-arrow-right-s-line iq-arrow-right" />
                                        </Link>
                                    </li>
                                    {categories?.map((c) => (
                                        <li className="elements">
                                            <Link
                                                className="dropdown-item"
                                                to={`/category/${c.slug}`}
                                            >
                                                <i className="ri-play-circle-line" /><span>{c.name}</span><i className="ri-arrow-right-s-line iq-arrow-right" />
                                                
                                            </Link>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </li>
                            <li>
                                <Link to="/products" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-file-alt iq-arrow-left" /><span>Products List</span><i className="ri-arrow-right-s-line iq-arrow-right" /></Link>
                            </li>
                            <li><a href="book-page.html"><i className="ri-book-line" />Yêu Thích</a></li>
                            <li><a href="book-pdf.html"><i className="ri-book-line" />Sách PDF</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Sidebar
