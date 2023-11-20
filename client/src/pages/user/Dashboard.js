import React from "react";
import Layout from "../../components/layout/Layout";
import UserMenu from "../../components/layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <UserMenu />
      {/* <!-- Page Content  --> */}
      <div id="content-page" className="content-page" style={{paddingTop: '50px'}}>
        <div className="container-fluid">
          <div className="row profile-content">
            <div className="col-12 col-md-12 col-lg-4">
            <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between align-items-center mb-0">
                  <div className="iq-header-title">
                    <h4 className="card-title mb-0">Personal Details</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <ul className="list-inline p-0 mb-0">
                    <li>
                      <div className="row align-items-center justify-content-between mb-3">
                        <div className="col-sm-6">
                          <h6>Birthday</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="mb-0">3rd March</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row align-items-center justify-content-between mb-3">
                        <div className="col-sm-6">
                          <h6>Address</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="mb-0">{auth?.user?.address}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row align-items-center justify-content-between mb-3">
                        <div className="col-sm-6">
                          <h6>Phone</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="mb-0">{auth?.user?.phone}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row align-items-center justify-content-between mb-3">
                        <div className="col-sm-6">
                          <h6>Email</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="mb-0">{auth?.user?.email}</p>
                        </div>
                      </div>
                    </li>                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Dashboard;