import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/LoginPageStyles.css'

import "../images/PetLy-login-gif-3.gif";

const LoginPage = ({ handleUser }) => {
    const dispatch = new useDispatch();
    const navigate = new useNavigate();

    const [errMsg, setErrMsg] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginEventHandler = (e) => {
        axios
            .post("http://localhost:8080/auth/login", {
                username: username,
                password: password,
            })
            .then((result) => {
                if (result.status === 200) {
                    console.log(result.data);
                    alert("Login success!");
                    navigate("/news-feed");
                    dispatch({
                        type: "LOGIN_SUCCESS",
                        payload: result.data,
                    });
                    dispatch({
                        type: "LOAD_ALLPOST"
                    });
                    handleUser(result.data);
                    setErrMsg("");
                } else {
                    setErrMsg("Username and Password not found");
                }
            })
            .catch((error) => {
                setErrMsg("Username and Password not found");
                });
    };

    return (
        <section 
        className="vh-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div 
                        className="card">
                            <div 
                            className="row g-0">
                                <div 
                                className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img 
                                    src={require("../images/PetLy-login-gif-3.gif")}
                                    alt="login form" 
                                    className="img-fluid" 
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form onSubmit={(e) => e.preventDefault()}>

                                            <div className="welcome mb-2 pb-1">
                                                <p className="h2 fw-bold">Welcome back to PetLy</p>
                                                <p>Update your pet's social account today!</p>
                                            </div>

                                            <h5 
                                            className="fw-normal mb-3 pb-3" 
                                            >Sign into your account</h5>

                                            <div className="form-outline mb-4">
                                                <input 
                                                className="form-control form-control-lg" 
                                                type="text" 
                                                id="form2Example17"
                                                name="uname" 
                                                value={username} 
                                                onChange={(e) =>
                                                        setUsername(e.target.value)
                                                    }
                                                required />
                                                <label 
                                                className="form-label" 
                                                htmlFor="form2Example17">Username{" "}</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input 
                                                className="form-control form-control-lg" 
                                                type="password"
                                                id="form2Example27" 
                                                name='pass' 
                                                value={password} 
                                                onChange={(e) =>
                                                        setPassword(e.target.value)
                                                    }
                                                    required />
                                                <label 
                                                className="form-label" 
                                                htmlFor="form2Example27">Password</label>
                                                <p style={{color: "red"}}>{errMsg}</p>
                                            </div>
                                            

                                            <div className="pt-1 mb-4">
                                                <button 
                                                type='submit' 
                                                onClick={loginEventHandler} 
                                                className="btn btn-dark btn-lg btn-block"
                                                >{" "}Login{" "}</button>
                                            </div>

                                            <a 
                                            className="small text-muted" 
                                            href="#!">Forgot password?</a>
                                            <p 
                                            className="mb-5 pb-lg-2" 
                                            >Don't have an account? 
                                            <Link to='/register'
                                            className='register'
                                            > Register here
                                            </Link>
                                            </p>
                                            <a 
                                            href="#!" 
                                            className="small text-muted">Terms of use.</a>
                                            <a 
                                            href="#!"
                                            className="small text-muted"> Privacy policy</a>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
