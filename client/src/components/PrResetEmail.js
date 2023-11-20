import React from 'react'

const PrResetEmail = () => {
    return (
        <>
            <div className="tab-pane fade" id="emailandsms" role="tabpanel">
                <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                            <h4 className="card-title">Email và SMS</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <form>
                            <div className="form-group row align-items-center">
                                <label className="col-8 col-md-3" htmlFor="emailnotification">Thông báo tới Email :</label>
                                <div className="col-4 col-md-9 custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="emailnotification" defaultChecked />
                                    <label className="custom-control-label" htmlFor="emailnotification" />
                                </div>
                            </div>
                            <div className="form-group row align-items-center">
                                <label className="col-8 col-md-3" htmlFor="smsnotification">Thông báo tới SMS:</label>
                                <div className="col-4 col-md-9 custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="smsnotification" defaultChecked />
                                    <label className="custom-control-label" htmlFor="smsnotification" />
                                </div>
                            </div>
                            <div className="form-group row align-items-center">
                                <label className="col-md-3" htmlFor="npass">Khi nào gửi Email</label>
                                <div className="col-md-9">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="email01" />
                                        <label className="custom-control-label" htmlFor="email01">Bạn có thông báo mới.</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="email02" />
                                        <label className="custom-control-label" htmlFor="email02">Bạn đã gửi một tin nhắn trực tiếp</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="email03" defaultChecked />
                                        <label className="custom-control-label" htmlFor="email03">Ai đó thêm bạn làm kết nối</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row align-items-center">
                                <label className="col-md-3" htmlFor="npass">Khi nào cần báo email</label>
                                <div className="col-md-9">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="email04" />
                                        <label className="custom-control-label" htmlFor="email04"> Theo đơn đặt hàng mới.</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="email05" />
                                        <label className="custom-control-label" htmlFor="email05"> Phê duyệt thành viên mới</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="email06" defaultChecked />
                                        <label className="custom-control-label" htmlFor="email06"> Đăng ký thành viên</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mr-2">Gửi</button>
                            <button type="reset" className="btn iq-bg-danger">Hủy bỏ</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrResetEmail
