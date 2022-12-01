import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "../images/register.png";
import "../images/PetLy-logo-primary.png";

import '../styles/RegisterPageStyles.css'

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const petTypeValues = [
        {
            name: "dog",
        },
        {
            name: "cat",
        },
        {
            name: "fish",
        },
        {
            name: "birds",
        },
        {
            name: "rabbit",
        },
    ];

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [petType, setPetType] = useState("");
    const [petName, setPetName] = useState("");
    const [selectedFile, setSelectedFile] = useState('')

    const onChangeNameHandler = (event) => {
        setName(event.target.value);
    };
    const onChangeUsernameHandler = (event) => {
        setUsername(event.target.value);
    };
    const onChangePasswordHandler = (event) => {
        setPassword(event.target.value);
    };
    const onChangeProfilePictureHandler = (event) => {
        const file = event.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setSelectedFile(reader.result)
        };

        setProfilePicture(event.target.value);
    };
    const onChangePetNamehandler = (event) => {
        setPetName(event.target.value);
    };
    const onChangePetTypeHandler = (event) => {
        setPetType(event.target.value);
    };

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name)
        formData.append('username', username)
        formData.append('profile_picture', selectedFile)
        formData.append('password', password)
        formData.append('pet_type', petType)
        formData.append('pet_name', petName)

        axios.post('http://localhost:8080/auth/register', formData)
            .then(result => {
                alert('registered successfuly')
                setName("");
                setUsername("");
                setPassword("");
                setProfilePicture("");
                setPetType("");
                setPetName("");
                navigate("/login");
            });

    };

    return (
        // <section className="vh-100 mt-2">
        //     <div className="mask d-flex align-items-center  gradient-custom-3">
        //         <div className="container  h-75">
        //             <div className="row d-flex justify-content-center align-items-center ">
        //                 <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        //                     <div
        //                         className="card"
        //                         style={{ "border-radius": "15px" }}
        //                     >
        //                         <div className="card-body p-5 shadow-lg ">
        //                             <h2 className="text-uppercase text-center mb-3">
        //                                 Create an account
        //                             </h2>
        //                             <form onSubmit={onSubmitFormHandler}>
        //                                 <div className="form-outline mb-1">
        //                                     <label className="form-label">
        //                                         Name
        //                                     </label>
        //                                     <input
        //                                         className="form-control form-control-lg"
        //                                         type="text"
        //                                         value={name}
        //                                         onChange={onChangeNameHandler}
        //                                         required
        //                                     />
        //                                 </div>
        //                                 <div className="form-outline mb-1">
        //                                     <label className="form-label">
        //                                         Username
        //                                     </label>
        //                                     <input
        //                                         className="form-control form-control-lg"
        //                                         type="text"
        //                                         value={username}
        //                                         onChange={
        //                                             onChangeUsernameHandler
        //                                         }
        //                                         required
        //                                     />
        //                                 </div>
        //                                 <div className="form-outline mb-1">
        //                                     <label className="form-label">
        //                                         Password
        //                                     </label>
        //                                     <input
        //                                         className="form-control form-control-lg"
        //                                         type="password"
        //                                         value={password}
        //                                         onChange={
        //                                             onChangePasswordHandler
        //                                         }
        //                                         required
        //                                     />
        //                                 </div>
        //                                 <div className="form-outline mb-1">
        //                                     <label className="form-label">
        //                                         Pet Name
        //                                     </label>
        //                                     <input
        //                                         className="form-control form-control-lg"
        //                                         type="text"
        //                                         value={petName}
        //                                         onChange={
        //                                             onChangePetNamehandler
        //                                         }
        //                                         required
        //                                     />
        //                                 </div>
        //                                 <div className="form-outline mb-1">
        //                                     <label className="form-label">
        //                                         Choose profile picture
        //                                     </label>
        //                                     <input
        //                                         className="form-control form-control-lg"
        //                                         id="profile-picture"
        //                                         type="file"
        //                                         value={profilePicture}
        //                                         onChange={
        //                                             onChangeProfilePictureHandler
        //                                         }
        //                                     />
        //                                 </div>
        //                                 <div className="form-outline mb-1">
        //                                     <label className="form-label">
        //                                         Select pet type
        //                                     </label>
        //                                     <select
        //                                         className="form-control form-control-lg"
        //                                         value={petType}
        //                                         onChange={
        //                                             onChangePetTypeHandler
        //                                         }
        //                                         required
        //                                     >
        //                                         <option>
        //                                             -- Pet types --
        //                                         </option>
        //                                         {petTypeValues.map((item) => {
        //                                             return (
        //                                                 <option>
        //                                                     {item.name}
        //                                                 </option>
        //                                             );
        //                                         })}
        //                                     </select>
        //                                 </div>
        //                                 <div className="d-flex justify-content-center mt-3">
        //                                     <button
        //                                         type="submit"
        //                                         className="btn btn-success center"
        //                                     >
        //                                         Create pet account
        //                                     </button>
        //                                 </div>
        //                                 <div className="form-outline mb-0 mt-2 text-center ">
        //                                     Already have an account?
        //                                     <Link to="/"> Login </Link>
        //                                 </div>
        //                             </form>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className="vh-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card">
                            <div className="row g-0">

                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form onSubmit={onSubmitFormHandler}>

                                            <div className="d-flex align-items-center">
                                                <img className="logo" src={require('../images/PetLy-logo-primary.png')} />
                                            </div>

                                            <span className="h3 fw-bold mb-0">Create your pet's account</span>

                                            <div className="form-outline mb-4">
                                                <label className="form-label">
                                                    Pet Name
                                                </label>
                                                <input
                                                    className="form-control form-control-md"
                                                    type="text"
                                                    value={name}
                                                    onChange={onChangeNameHandler}
                                                    required />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label">
                                                    Username
                                                </label>
                                                <input
                                                    className="form-control form-control-md"
                                                    type="text"
                                                    value={username}
                                                    onChange={onChangeUsernameHandler}
                                                    required />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label">
                                                    Password
                                                </label>
                                                <input
                                                    className="form-control form-control-md"
                                                    type="password"
                                                    value={password}
                                                    onChange={onChangePasswordHandler}
                                                    required />
                                            </div>
                                            {/* <div className="form-outline mb-4">
                                                <label className="form-label">
                                                    Pet Name
                                                </label>
                                                <input
                                                    className="form-control form-control-md"
                                                    type="text"
                                                    value={petName}
                                                    onChange={onChangePetNamehandler}
                                                    required />
                                            </div> */}
                                            <div className="form-outline mb-1">
                                                <label className="form-label">
                                                    Choose profile picture
                                                </label>
                                                <input
                                                    className="form-control form-control-md"
                                                    id="profile-picture"
                                                    type="file"
                                                    value={profilePicture}
                                                    onChange={onChangeProfilePictureHandler} />
                                            </div>
                                            <div className="form-outline mb-1">
                                                <label className="form-label">
                                                    Select pet type
                                                </label>
                                                <select
                                                    className="form-control form-control-md"
                                                    value={petType}
                                                    onChange={onChangePetTypeHandler} 
                                                    required>
                                                    <option>
                                                        -- Pet types --
                                                    </option>
                                                    {petTypeValues.map((item) => {
                                                        return (
                                                            <option>
                                                                {item.name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                                <button type="submit" className="btn btn-success center">
                                                    Create pet account
                                                </button>
                                            </div>

                                            <div className="form-outline mb-0 mt-2 text-center ">
                                                Already have an account?
                                                <Link to="/"> Login </Link>
                                            </div>
                                            <br></br>
                                            <a href="#!" className="small text-muted">Terms of use.</a>
                                            <a href="#!" className="small text-muted"> Privacy policy</a>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={require("../images/register.png")} 
                                    alt="register form"
                                    className="img-fluid resize" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default RegisterPage;
