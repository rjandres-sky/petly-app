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
            .catch((error) => console.log(error));
    };

    return (
        // <section className="mt-3" >
        //     <div className="mask d-flex align-items-center  gradient-custom-3">
        //         <div className="container  h-75">
        //             <div className="row d-flex justify-content-center align-items-center ">
        //                 <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        //                     <div
        //                         className="card"
        //                         style={{ "border-radius": "15px" }}
        //                     >
        //                         <img
        //                             src={require("../images/PetLy-login-gif.gif")}
        //                             class="w-100 h-auto img"
        //                             style={{"border-top-left-radius" : ".3rem", "border-top-right-radius": ".3rem;"}}
        //                             alt="Sample photo"
        //                         ></img>
        //                         <div className="card-body p-5 shadow-lg ">
        //                             <h2 className="text-uppercase text-center mb-3">
        //                                 Log in
        //                             </h2>
        //                             <form onSubmit={(e) => e.preventDefault()}>
        //                                 <div className="form-outline mb-1">
        //                                     <label className="form-label">
        //                                         Username{" "}
        //                                     </label>
        //                                     <input
        //                                         className="form-control form-control-lg"
        //                                         type="text"
        //                                         name="uname"
        //                                         value={username}
        //                                         onChange={(e) =>
        //                                             setUsername(e.target.value)
        //                                         }
        //                                         required
        //                                     />
        //                                 </div>
        //                                 <div className="form-outline mb-1">
        //                                     <label className="form-label">
        //                                         Password{" "}
        //                                     </label>
        //                                     <input
        //                                         className="form-control form-control-lg"
        //                                         type="password"
        //                                         name="pass"
        //                                         value={password}
        //                                         onChange={(e) =>
        //                                             setPassword(e.target.value)
        //                                         }
        //                                         required
        //                                     />
        //                                 </div>
        //                                 {errMsg !== "" && (
        //                                     <div className="error-message">
        //                                         <small> {errMsg} </small>
        //                                     </div>
        //                                 )}
        //                                 <div className="d-flex justify-content-center mt-3">
        //                                     <button
        //                                         type="submit"
        //                                         onClick={loginEventHandler}
        //                                         className="btn btn-success center"
        //                                     >
        //                                         {" "}
        //                                         Log in{" "}
        //                                     </button>
        //                                 </div>
        //                                 <div className="form-outline mb-0 mt-2 text-center ">
        //                                     Don`t have an account? 
        //                                     <Link to="/register"> Register </Link>
        //                                 </div>
        //                             </form>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
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

                                            <div className="welcome align-items-center mb-3 pb-1">
                                                <p className="h2 fw-bold text-center">Welcome back to PetLy</p>
                                                <p className="text-center">Update your pet's social account today!</p>
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
                                            </div>
                                            {errMsg !== "" && (
                                                <div className="error-message">
                                                    <small> {errMsg} </small>
                                                </div>
                                            )}

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
