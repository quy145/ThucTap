import React from 'react'

const PrResetPassword = () => {
    return (
        <>
            <div className="tab-pane fade" id="chang-pwd" role="tabpanel">
                <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                            <h4 className="card-title">Đổi mật khẩu</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="cpass">Mật khẩu hiện tại:</label>
                                <a href="javascripe:void();" className="float-right">Quên mật khẩu</a>
                                <input type="Password" className="form-control" id="cpass" defaultValue />
                            </div>
                            <div className="form-group">
                                <label htmlFor="npass">Mật khẩu mới:</label>
                                <input type="Password" className="form-control" id="npass" defaultValue />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vpass">Xác nhận lại mật khẩu:</label>
                                <input type="Password" className="form-control" id="vpass" defaultValue />
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

export default PrResetPassword
