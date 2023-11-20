import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import UserMenu from "../../components/layout/UserMenu";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import PrResetPassword from "../../components/PrResetPassword";
import PrResetEmail from "../../components/PrResetEmail";
import PrContact from "../../components/PrContact";

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, password, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setPassword(password);
    setAddress(address);
  }, [auth?.user]);

  console.log(password);
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Your Profile"}>
      {/* <!-- Page Content  --> */}
      <div id="content-page" className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="iq-card">
                <div className="iq-card-body p-0">
                  <div className="iq-edit-list">
                    <ul className="iq-edit-profile d-flex nav nav-pills">
                      <li className="col-md-3 p-0">
                        <a className="nav-link active" data-toggle="pill" href="#personal-information">
                          Thông tin cá nhân
                        </a>
                      </li>
                      <li className="col-md-3 p-0">
                        <a className="nav-link" data-toggle="pill" href="#chang-pwd">
                          Đổi mật khẩu
                        </a>
                      </li>
                      <li className="col-md-3 p-0">
                        <a className="nav-link" data-toggle="pill" href="#emailandsms">
                          Email và SMS
                        </a>
                      </li>
                      <li className="col-md-3 p-0">
                        <a className="nav-link" data-toggle="pill" href="#manage-contact">
                          Quản lý liên hệ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="iq-edit-list-data">
                <div className="tab-content">
                  <div className="tab-pane fade active show" id="personal-information" role="tabpanel">
                    <div className="iq-card">
                      <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                          <h4 className="card-title">Thông tin cá nhân</h4>
                        </div>
                      </div>
                      <div className="iq-card-body">
                        <form onSubmit={handleSubmit}>
                          <div className="form-group row align-items-center">
                            <div className="col-md-12">
                              <div className="profile-img-edit">
                                <img className="profile-pic" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?size=626&ext=jpg&ga=GA1.1.1298238410.1697260880&semt=ais" alt="profile-pic" />
                                <div className="p-image">
                                  <i className="ri-pencil-line upload-button" />
                                  <input className="file-upload" type="file" accept="image/*" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" row align-items-center">
                            <div className="form-group col-sm-6">
                              <label htmlFor="fname">Name: </label>
                              <input type="text" className="form-control" id="fname" value={name}
                                onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group col-sm-6">
                              <label htmlFor="email">Email:</label>
                              <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" />
                            </div>
                            <div className="form-group col-sm-6">
                              <label htmlFor="password">Password:</label>
                              <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" />
                            </div>
                            <div className="form-group col-sm-6">
                              <label htmlFor="phone">Phone:</label>
                              <input type="text" value={phone}
                    onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone"/>
                            </div>                           
                            <div className="form-group col-sm-12">
                              <label>Địa chỉ:</label>
                              <textarea value={address}
                    onChange={(e) => setAddress(e.target.value)} className="form-control" name="address" rows={5} style={{ height: '150px' }}  />
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary mr-2">Gửi</button>
                          <button type="reset" className="btn iq-bg-danger">Hủy bỏ</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <PrResetPassword />
                  <PrResetEmail />
                  <PrContact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
};
export default Profile;