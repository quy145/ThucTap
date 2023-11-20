import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import Layout from "../../components/layout/Layout";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
      {/* <!-- Sign in Start --> */}
      <section className="sign-in-page">
        <div className="container p-0">
          <div className="row no-gutters height-self-center">
            <div className="col-sm-12 align-self-center page-content rounded">
              <div className="row m-0">
                <div className="col-sm-12 sign-in-page-data">
                  <div className="sign-in-from bg-primary rounded">
                    <h3 className="mb-0 text-center text-white">RESET PASSWORD</h3>
                    <form onSubmit={handleSubmit} className="mt-4 form-text">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" value={email}
                          onChange={(e) => setEmail(e.target.value)} className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Answer</label>
                        <input type="password" value={answer}
                          onChange={(e) => setAnswer(e.target.value)} className="form-control mb-0" id="exampleInputPassword1" placeholder="Enter Your Best Friend" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password new</label>
                        <input type="password" value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)} className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter Your Password" required />
                      </div>
                      <div className="sign-info text-center">
                        <button type="submit" className="btn btn-white d-block w-100 mb-2">Reset</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Sign in END --> */}
    </Layout>
  );
};

export default ForgotPasssword;