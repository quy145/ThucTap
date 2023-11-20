import React from 'react'

const Favoritebooks = () => {
    return (
        <>
            <div className="col-lg-12">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-header d-flex justify-content-between align-items-center position-relative">
                        <div className="iq-header-title">
                            <h4 className="card-title mb-0">Sách yêu thích</h4>
                        </div>
                        <div className="iq-card-header-toolbar d-flex align-items-center">
                            <a href="category.html" className="btn btn-sm btn-primary view-more">Xem thêm</a>
                        </div>
                    </div>
                    <div className="iq-card-body favorites-contens">
                        <ul id="favorites-slider" className="list-inline p-0 mb-0 row">
                            <li className="col-md-4 mb-4">
                                <div className="d-flex align-items-center">
                                    <div className="col-5 p-0 position-relative">
                                        <a href="javascript:void();">
                                            <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais" className="img-fluid rounded w-100" />
                                        </a>
                                    </div>
                                    <div className="col-7">
                                        <h5 className="mb-2">D. Trump - Nghệ Thuật Đàm Phán</h5>
                                        <p className="mb-2">Tác giả : Pedro Araez</p>
                                        <div className="d-flex justify-content-between align-items-center text-dark font-size-13">
                                            <span>Đã bán</span>
                                            <span className="mr-4">69</span>
                                        </div>
                                        <div className="iq-progress-bar-linear d-inline-block w-100">
                                            <div className="iq-progress-bar iq-bg-primary">
                                                <span className="bg-primary" data-percent={65} style={{width: "65px"}} />
                                            </div>
                                        </div>
                                        <a href="#" className="text-dark">Đọc ngay<i className="ri-arrow-right-s-line" /></a>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-4 mb-4">
                                <div className="d-flex align-items-center">
                                    <div className="col-5 p-0 position-relative">
                                        <a href="javascript:void();">
                                            <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais" className="img-fluid rounded w-100" />
                                        </a>
                                    </div>
                                    <div className="col-7">
                                        <h5 className="mb-2">Một Đời Quản Trị</h5>
                                        <p className="mb-2">Tác giả : Michael klock</p>
                                        <div className="d-flex justify-content-between align-items-center text-dark font-size-13">
                                            <span>Đã bán</span>
                                            <span className="mr-4">450</span>
                                        </div>
                                        <div className="iq-progress-bar-linear d-inline-block w-100">
                                            <div className="iq-progress-bar iq-bg-danger">
                                                <span className="bg-danger" data-percent={45} style={{width: "45px"}}/>
                                            </div>
                                        </div>
                                        <a href="#" className="text-dark">Đọc ngay<i className="ri-arrow-right-s-line" /></a>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-4 mb-4">
                                <div className="d-flex align-items-center">
                                    <div className="col-5 p-0 position-relative">
                                        <a href="javascript:void();">
                                            <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais" className="img-fluid rounded w-100" />
                                        </a>
                                    </div>
                                    <div className="col-7">
                                        <h5 className="mb-2">Người Bán Hàng Vĩ Đại Nhất Thế Giới</h5>
                                        <p className="mb-2">Tác giả : Daniel Ace</p>
                                        <div className="d-flex justify-content-between align-items-center text-dark font-size-13">
                                            <span>Đã bán</span>
                                            <span className="mr-4">79</span>
                                        </div>
                                        <div className="iq-progress-bar-linear d-inline-block w-100">
                                            <div className="iq-progress-bar iq-bg-info">
                                                <span className="bg-info" data-percent={78} style={{width: "78px"}}/>
                                            </div>
                                        </div>
                                        <a href="#" className="text-dark">Đọc ngay<i className="ri-arrow-right-s-line" /></a>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-4 mb-4">
                                <div className="d-flex align-items-center">
                                    <div className="col-5 p-0 position-relative">
                                        <a href="javascript:void();">
                                            <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais" className="img-fluid rounded w-100" />
                                        </a>
                                    </div>
                                    <div className="col-7">
                                        <h5 className="mb-2">Economix- Các Nền Kinh Tế Vận Hành</h5>
                                        <p className="mb-2">Tác giả : Luka Afton</p>
                                        <div className="d-flex justify-content-between align-items-center text-dark font-size-13">
                                            <span>Đã bán</span>
                                            <span className="mr-4">900</span>
                                        </div>
                                        <div className="iq-progress-bar-linear d-inline-block w-100">
                                            <div className="iq-progress-bar iq-bg-success">
                                                <span className="bg-success" data-percent={90} style={{width: "90px"}}/>
                                            </div>
                                        </div>
                                        <a href="#" className="text-dark">Đọc ngay<i className="ri-arrow-right-s-line" /></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Favoritebooks
