import React from 'react'

const PrContact = () => {
    return (
        <>
            <div className="tab-pane fade" id="manage-contact" role="tabpanel">
                <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                            <h4 className="card-title">Quản lý liên hệ</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="cno">Số liên lạc:</label>
                                <input type="text" className="form-control" id="cno" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="text" className="form-control" id="email"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="url">Url:</label>
                                <input type="text" className="form-control" id="url" />
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

export default PrContact
