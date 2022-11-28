import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

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
        dispatch({
            type: "REGISTER",
            payload: {
                name: name,
                username: username,
                password: password,
                profile_picture: profilePicture,
                pet_type: petType,
                pet_name: petName,
            },
        });
        setName("");
        setUsername("");
        setPassword("");
        setProfilePicture("");
        setPetType("");
        setPetName("");
        navigate("/get-started");
    };

    return (
        <section className="h-75 mt-2">
            <div className="mask d-flex align-items-center  gradient-custom-3">
                <div className="container  h-75">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div
                                className="card"
                                style={{ "border-radius": "15px" }}
                            >
                                <div className="card-body p-5 shadow-lg ">
                                    <h2 className="text-uppercase text-center mb-3">
                                        Create an account
                                    </h2>
                                    <form onSubmit={onSubmitFormHandler}>
                                        <div className="form-outline mb-1">
                                            <label className="form-label">
                                                Name
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                type="text"
                                                value={name}
                                                onChange={onChangeNameHandler}
                                            />
                                        </div>
                                        <div className="form-outline mb-1">
                                            <label className="form-label">
                                                Username
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                type="text"
                                                value={username}
                                                onChange={
                                                    onChangeUsernameHandler
                                                }
                                            />
                                        </div>
                                        <div className="form-outline mb-1">
                                            <label className="form-label">
                                                Password
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                type="password"
                                                value={password}
                                                onChange={
                                                    onChangePasswordHandler
                                                }
                                            />
                                        </div>
                                        <div className="form-outline mb-1">
                                            <label className="form-label">
                                                Pet Name
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                type="text"
                                                value={petName}
                                                onChange={
                                                    onChangePetNamehandler
                                                }
                                            />
                                        </div>
                                        <div className="form-outline mb-1">
                                            <label className="form-label">
                                                Choose profile picture
                                            </label>
                                            <input
                                                className="form-control form-control-lg"
                                                id="profile-picture"
                                                type="file"
                                                value={profilePicture}
                                                onChange={
                                                    onChangeProfilePictureHandler
                                                }
                                            />
                                        </div>
                                        <div className="form-outline mb-1">
                                            <label className="form-label">
                                                Select pet type
                                            </label>
                                            <select
                                                className="form-control form-control-lg"
                                                value={petType}
                                                onChange={
                                                    onChangePetTypeHandler
                                                }
                                            >
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
                                            <button
                                                type="submit"
                                                className="btn btn-success center"
                                            >                                       
                                                Create pet account                                          
                                            </button>
                                        </div>
                                        <div className="form-outline mb-0 mt-2 text-center ">
                                            Already have an account?
                                            <Link to="/login"> Login </Link>
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

export default RegisterPage;
