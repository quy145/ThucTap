import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { FcShop } from "react-icons/fc"
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
import SearchInput from '../Form/SearchInput'
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import Sidebar from '../../components/layout/SideBar'



const Header = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    const categories = useCategory();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand" ><FcShop /> Ecommerce App</Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <SearchInput />
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to={"/categories"}
                                    data-bs-toggle="dropdown"
                                >
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={"/categories"}>
                                            All Categories
                                        </Link>
                                    </li>
                                    {categories?.map((c) => (
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to={`/category/${c.slug}`}
                                            >
                                                {c.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            {!auth?.user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/register" className="nav-link">
                                            Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link">
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item dropdown">
                                        <NavLink
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            style={{ border: "none" }}
                                        >
                                            {auth?.user?.name}
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink
                                                    to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                                                        }`}
                                                    className="dropdown-item"
                                                >
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    onClick={handleLogout}
                                                    to="/login"
                                                    className="dropdown-item"
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            )}
                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link">
                                    <Badge count={cart?.length} showZero offset={[10, -5]}>
                                        Cart
                                    </Badge>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Sidebar />

            {/* <!-- TOP Nav Bar --> */}
            <div className="iq-top-navbar">
                <div className="iq-navbar-custom">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <div className="iq-menu-bt d-flex align-items-center">
                            <div className="wrapper-menu">
                                <div className="main-circle"><i className="las la-bars" /></div>
                            </div>
                            <div className="iq-navbar-logo d-flex justify-content-between">
                                <Link to="/" className="header-logo">
                                    <img src="https://i.pinimg.com/564x/82/af/4b/82af4bb76f88b45995b8bb3b08187b98.jpg" className="img-fluid rounded-normal"  />
                                    <div className="logo-title">
                                        <span className="text-primary text-uppercase">Book Store</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-breadcrumb">
                            <h5 className="mb-0"></h5>
                        </div>
                        <div className="iq-search-bar">
                           <SearchInput/>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                            <i className="ri-menu-3-line" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto navbar-list">
                                <li className="nav-item nav-icon search-content">
                                    <a href="#" className="search-toggle iq-waves-effect text-gray rounded">
                                        <i className="ri-search-line" />
                                    </a>
                                    <form action="#" className="search-box p-0">
                                        <input type="text" className="text search-input" placeholder="Type here to search..." />
                                        <a className="search-link" href="#"><i className="ri-search-line" /></a>
                                    </form>
                                </li>
                                <li className="nav-item nav-icon">
                                    <a href="#" className="search-toggle iq-waves-effect text-gray rounded">
                                        <i className="ri-notification-2-line" />
                                        <span className="bg-primary dots" />
                                    </a>
                                    <div className="iq-sub-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white">Thông Báo<small className="badge  badge-light float-right pt-1">4</small></h5>
                                                </div>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className>
                                                            <img className="avatar-40 rounded" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais"  />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Đơn hàng giao thành công</h6>
                                                            <small className="float-right font-size-12">Just Now</small>
                                                            <p className="mb-0">95.000đ</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className>
                                                            <img className="avatar-40 rounded" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais"  />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Đơn hàng giao thành công</h6>
                                                            <small className="float-right font-size-12">5 days ago</small>
                                                            <p className="mb-0">255.000đ</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className>
                                                            <img className="avatar-40 rounded" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais"  />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Đơn hàng giao thành công</h6>
                                                            <small className="float-right font-size-12">2 days ago</small>
                                                            <p className="mb-0">79.000đ</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className>
                                                            <img className="avatar-40 rounded" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais"  />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Đơn hàng #7979 giao không thành công</h6>
                                                            <small className="float-right font-size-12">3 days ago</small>
                                                            <p className="mb-0">100.000đ</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item nav-icon dropdown">
                                    <a href="#" className="search-toggle iq-waves-effect text-gray rounded">
                                        <i className="ri-mail-line" />
                                        <span className="bg-primary dots" />
                                    </a>
                                    <div className="iq-sub-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0 ">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white">Tin Nhắn<small className="badge  badge-light float-right pt-1">5</small></h5>
                                                </div>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className>
                                                            <img className="avatar-40 rounded" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais"  />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">QT Shop</h6>
                                                            <small className="float-left font-size-12">13 Jun</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className>
                                                            <img className="avatar-40 rounded" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais"  />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Tran Thuan Store</h6>
                                                            <small className="float-left font-size-12">20 Apr</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className>
                                                            <img className="avatar-40 rounded" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais"  />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Hoang Vu Book</h6>
                                                            <small className="float-left font-size-12">30 Jun</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className>
                                                            <img className="avatar-40 rounded" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais"  />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Quang Minh Book</h6>
                                                            <small className="float-left font-size-12">12 Sep</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className>
                                                            <img className="avatar-40 rounded" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais"  />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">TV Team</h6>
                                                            <small className="float-left font-size-12">5 Dec</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item nav-icon dropdown">
                               
                                    <NavLink to="/cart" className="search-toggle iq-waves-effect text-gray rounded">
                                        <i className="ri-shopping-cart-2-line" />
                                        <span className="badge badge-danger count-cart rounded-circle">{cart?.length}</span>
                                    </NavLink>
                                </li>
                                <li className="line-height pt-3">
                                {!auth?.user ? (
                                <>
                                    <li className="nav-item" style={{marginTop: "14px"}}>
                                        <NavLink to="/register" className="nav-link">
                                            Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item" style={{marginTop: "14px"}}>
                                        <NavLink to="/login" className="nav-link">
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <NavLink href="#" className="search-toggle iq-waves-effect d-flex align-items-center">
                                        <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais" className="img-fluid rounded-circle mr-3"  />
                                        <div className="caption">
                                            <h6 className="mb-1 line-height">{auth?.user?.name}</h6>
                                            <p className="mb-0 text-primary">Tài Khoản</p>
                                        </div>
                                    </NavLink>
                                    <div className="iq-sub-dropdown iq-user-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0 ">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white line-height">Xin Chào {auth?.user?.name}</h5>
                                                </div>
                                                <NavLink  to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                                                        }`} href="profile-edit.html" className="iq-sub-card iq-bg-primary-hover">
                                                    <div className="media align-items-center">
                                                        <div className="rounded iq-card-icon iq-bg-primary">
                                                            <i className="ri-file-user-line" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Tài khoản của tôi</h6>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                                <a href="profile-edit.html" className="iq-sub-card iq-bg-primary-hover">
                                                    <div className="media align-items-center">
                                                        <div className="rounded iq-card-icon iq-bg-primary">
                                                            <i className="ri-profile-line" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Địa chỉ</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card iq-bg-primary-hover">
                                                    <div className="media align-items-center">
                                                        <div className="rounded iq-card-icon iq-bg-primary">
                                                            <i className="ri-account-box-line" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <NavLink to="/dashboard/user/orders"><h6 className="mb-0 ">Đơn hàng của tôi</h6></NavLink>
                                                            
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card iq-bg-primary-hover">
                                                    <div className="media align-items-center">
                                                        <div className="rounded iq-card-icon iq-bg-primary">
                                                            <i className="ri-heart-line" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Yêu Thích</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="d-inline-block w-100 text-center p-3">
                                                    <NavLink  onClick={handleLogout}  to="/login" className="bg-primary iq-sign-btn" href="sign-in.html" role="button">Sign out<i className="ri-login-box-line ml-2" /></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                                   
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/* <!-- TOP Nav Bar END --> */}
        </>
    )
}

export default Header