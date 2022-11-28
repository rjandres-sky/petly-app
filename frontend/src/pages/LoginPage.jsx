import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "../images/login_pic.jpg";

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
                        type: "LOAD_CURRENTUSER",
                        payload: result.data,
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
        <section className="mt-3" >
            <div className="mask d-flex align-items-center  gradient-custom-3">
                <div className="container  h-75">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div
                                className="card"
                                style={{ "border-radius": "15px" }}
                            >
                                <img
                                    src={require("../images/login_pic.jpg")}
                                    class="w-100 h-auto img"
                                    style={{"border-top-left-radius" : ".3rem", "border-top-right-radius": ".3rem;"}}
                                    alt="Sample photo"
                                ></img>
                                <div className="card-body p-5 shadow-lg ">
                                    <h2 className="text-uppercase text-center mb-3">
                                        Log in
                                    </h2>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="form-outline mb-1">
                                            <label className="form-label">
                                                Username{" "}
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                type="text"
                                                name="uname"
                                                value={username}
                                                onChange={(e) =>
                                                    setUsername(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="form-outline mb-1">
                                            <label className="form-label">
                                                Password{" "}
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                type="password"
                                                name="pass"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                        {errMsg !== "" && (
                                            <div className="error-message">
                                                <small> {errMsg} </small>
                                            </div>
                                        )}
                                        <div className="d-flex justify-content-center mt-3">
                                            <button
                                                type="submit"
                                                onClick={loginEventHandler}
                                                className="btn btn-success center"
                                            >
                                                {" "}
                                                Log in{" "}
                                            </button>
                                        </div>
                                        <div className="form-outline mb-0 mt-2 text-center ">
                                            Don`t have an account? 
                                            <Link to="/register"> Register </Link>
                                        </div>
                                    </form>
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
