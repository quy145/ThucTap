import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
// import '../../styles/AuthStyles.css'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate()

    // form function 
    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/v1/auth/register', {
                name,
                email,
                password,
                phone,
                address,
                answer,
            });

            if (res && res.data.success) {
                toast.success(res.data.message)
                navigate('/login')
            } else {
                toast.error(res.data.message)
            }
            console.log(name, email, password, address, phone, answer);
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }

    }
    // console.log(process.env.REACT_APP_API);
    return (
        <Layout title={'Register - Ecommer App'}>
            {/* <!-- Sign in Start --> */}
            <section className="sign-in-page">
                <div className="container p-0">
                    <div className="row no-gutters height-self-center">
                        <div className="col-sm-12 align-self-center page-content rounded">
                            <div className="row m-0">
                                <div className="col-sm-12 sign-in-page-data">
                                    <div className="sign-in-from bg-primary rounded">
                                        <h3 className="mb-0 text-center text-white">Sign Up</h3>
                                        <form onSubmit={handlesubmit} className="mt-4 form-text">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName">Your Full Name</label>
                                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-0" id="exampleInputName" placeholder="Your Full Name" required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail">Email address</label>
                                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-0" id="exampleInputEmail" placeholder="Enter email" required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-0" id="exampleInputPassword1" placeholder="Password" required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName">Your Phone</label>
                                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control mb-0" id="exampleInputName" placeholder="Your Phone" required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName">Address</label>
                                                <input type="text" alue={address} onChange={(e) => setAddress(e.target.value)} className="form-control mb-0" id="exampleInputName" placeholder="Enter you Address" required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName">Answer</label>
                                                <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control mb-0" id="exampleInputName" placeholder="What is Your Best Friend ?" required/>
                                            </div>
                                            <div className="d-inline-block w-100">
                                                <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" htmlFor="customCheck1">I accept <a href="#" className="text-light">Terms and Conditions</a></label>
                                                </div>
                                            </div>
                                            <div className="sign-info text-center">
                                                <button type="submit" className="btn btn-white d-block w-100 mb-2">Sign Up</button>
                                                <span className="text-dark d-inline-block line-height-2">Already Have Account ? <NavLink to="/login" className="text-white">Log In</NavLink></span>
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

            {/* <!-- color-customizer --> */}
            <div className="iq-colorbox color-fix">
                <div className="buy-button"> <a className="color-full" href="#"><i className="fa fa-spinner fa-spin" /></a> </div>
                <div className="clearfix color-picker">
                    <h3 className="iq-font-black">Booksto Awesome Color</h3>
                    <p>This color combo available inside whole template. You can change on your wish, Even you can create your own with limitless possibilities! </p>
                    <ul className="iq-colorselect clearfix">
                        <li className="color-1 iq-colormark" data-style="color-1" />
                        <li className="color-2" data-style="iq-color-2" />
                        <li className="color-3" data-style="iq-color-3" />
                        <li className="color-4" data-style="iq-color-4" />
                        <li className="color-5" data-style="iq-color-5" />
                        <li className="color-6" data-style="iq-color-6" />
                        <li className="color-7" data-style="iq-color-7" />
                        <li className="color-8" data-style="iq-color-8" />
                        <li className="color-9" data-style="iq-color-9" />
                        <li className="color-10" data-style="iq-color-10" />
                        <li className="color-11" data-style="iq-color-11" />
                        <li className="color-12" data-style="iq-color-12" />
                        <li className="color-13" data-style="iq-color-13" />
                        <li className="color-14" data-style="iq-color-14" />
                        <li className="color-15" data-style="iq-color-15" />
                        <li className="color-16" data-style="iq-color-16" />
                        <li className="color-17" data-style="iq-color-17" />
                        <li className="color-18" data-style="iq-color-18" />
                        <li className="color-19" data-style="iq-color-19" />
                        <li className="color-20" data-style="iq-color-20" />
                    </ul>
                    <a target="_blank" className="btn btn-primary d-block mt-3" href>Purchase Now</a>
                </div>
            </div>

            {/* <!-- color-customizer END --> */}

        </Layout>
    )
}

export default Register