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
    const [retypePassword, setRetypePassword] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [petType, setPetType] = useState("");
    const [petName, setPetName] = useState("");
    const [selectedFile, setSelectedFile] = useState('')

    const [errorMsg, setErrorMsg] =useState('')

    const onChangeNameHandler = (event) => {
        setName(event.target.value);
    };
    const onChangeUsernameHandler = (event) => {
        setUsername(event.target.value);
    };
    const onChangePasswordHandler = (event) => {
        setPassword(event.target.value);
    };
    const onChangeRetypePasswordHandler = (event) => {
        setRetypePassword(event.target.value);
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
        if(password === retypePassword) {
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
                setErrorMsg("")
                navigate("/");
            });
        } else {
            setErrorMsg('Password not match')
        }
    };

    return (

        <section className="vh-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card">
                            <div className="row g-0">

                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form onSubmit={onSubmitFormHandler}>

                                            <p className="h3 fw-bold mb-0 text-center">Create your pet's account</p>

                                            <div className="form-outline mb-1">
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
                                            <div className="form-outline mb-1">
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
                                            <div className="form-outline mb-1">
                                                <label className="form-label">
                                                    Password
                                                </label>
                                                <input
                                                    className="form-control form-control-md"
                                                    type="password"
                                                    value={password}
                                                    onChange={onChangePasswordHandler}
                                                    required />
                                                    <label className="form-label">
                                                    Retype Password
                                                </label>
                                                <input
                                                    className="form-control form-control-md"
                                                    type="password"
                                                    value={retypePassword}
                                                    onChange={onChangeRetypePasswordHandler}
                                                    required />
                                                    <p style={{color: "red"}}>{errorMsg}</p>
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
                                                <Link to="/" className='link-text'> Login </Link>
                                            </div>
                                            <br></br>
                                            <a href="#!" className="small text-muted">Terms of use.</a>
                                            <a href="#!" className="small text-muted"> Privacy policy</a>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img className="logo" src={require('../images/PetLy-logo-primary.png')} />
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
