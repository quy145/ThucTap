import React from 'react'

const BestSeller = () => {
  return (
    <>
    <div className="col-lg-6">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header d-flex justify-content-between mb-0">
                  <div className="iq-header-title">
                    <h4 className="card-title">Best Seller</h4>
                  </div>
                  <div className="iq-card-header-toolbar d-flex align-items-center">
                    <div className="dropdown">
                      <span className="dropdown-toggle p-0 text-body" id="dropdownMenuButton2" data-toggle="dropdown">
                        Trong ngày<i className="ri-arrow-down-s-fill" />
                      </span>
                      <div className="dropdown-menu dropdown-menu-right shadow-none" aria-labelledby="dropdownMenuButton2">
                        <a className="dropdown-item" href="#">Ngày</a>
                        <a className="dropdown-item" href="#">Tuần</a>
                        <a className="dropdown-item" href="#">Tháng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="iq-card-body">
                  <div className="row align-items-center">
                    <div className="col-sm-5 pr-0">
                      <a href="javascript:void();"><img className="img-fluid rounded w-100" src="images/new_realeases/img01.jpg" /></a>
                    </div>
                    <div className="col-sm-7 mt-3 mt-sm-0">
                      <h4 className="mb-2">Payback Time <br /> Ngày Đòi Nợ</h4>
                      <p className="mb-2">Tác Giả : Phill Town</p>
                      <div className="mb-2 d-block">
                        <span className="font-size-12 text-warning">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </span>
                      </div>
                      <span className="text-dark mb-3 d-block">NGÀY ĐÒI NỢ – Payback Time
                        “Một cuộc sống hạnh phúc được bắt đầu từ những quyết định đầu tư khôn ngoan”</span>
                      <button type="submit" className="btn btn-primary learn-more">Xem thêm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default BestSeller
