import { useState } from "react";

//sample profile picture
import "../images/vecteezy_dog-face-logo_6720668.jpg";
import Navbar from "../components/SideBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.Auth);
    const [name, setName] = useState(currentUser.name);
    const [password, setPassword] = useState(null);
    const [profilePicture, setProfilePicture] = useState("");
    const [username, setUsername] = useState(currentUser.username);
    const [selectedFile, setSelectedFile] = useState(currentUser.profile_picture);
    const [date_joined, setDateJoined] = useState(currentUser.date_joined);
    const [retypePassword, setRetypePassword] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    
    const [errorMsg, setErrorMsg] = useState('')

    const handleProfilePicture = (event) => {
        const file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setSelectedFile(reader.result);
        };

        setProfilePicture(event.target.value);
    };

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        //formData.append('username', username)
        formData.append("profile_picture", selectedFile);
        //formData.append('password', password)
        //formData.append('pet_type', petType)
        formData.append('date_joined', date_joined)

        axios
            .put("http://localhost:8080/auth/" + currentUser._id, formData)
            .then((result) => {
                alert("registered successfuly");
                dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
            });
    };

    const onSavePasswordHandler = (e) => {
        e.preventDefault()
        if (password === "") {
            setErrorMsg('Password is required')
        } else {
            if (retypePassword === password) {
                axios
                    .put("http://localhost:8080/auth/" + currentUser._id + '/change', {
                        currentpassword : currentPassword,
                        newpassword: password
                    })
                    .then((result) => {
                        alert("password successfuly");
                        setCurrentPassword('')
                        setPassword('')
                        setRetypePassword('')
                        setErrorMsg('')
                    })
                    .catch(setErrorMsg('Password not matched'))

            } else {
                setErrorMsg('Password not matched')
            }
        }


    }

    return (
        <section className="profile-page d-flex container-fluid card w-50 mt-5 p-5 shadow-lg">
            <Navbar />
            <p className="text-center h2"> My Pet Profile </p>
            <form className="pet-data text-center ">
                <div className="profile-pic d-flex align-items-center justify-content-center m-1 p-1 form-outline">
                    <label class="btn btn-default">
                        <input
                            type="file"
                            hidden
                            value={profilePicture}
                            onChange={handleProfilePicture}
                        />
                        <img
                            className="rounded-circle shadow-4-strong w-25 h-25 shadow-lg"
                            value={selectedFile}
                            src={selectedFile}
                            alt="profile_picture"
                        />{" "}
                        <br />
                    </label>
                </div>
                <div className="mb-3 row ">
                    <label className="col-sm-3 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-9">
                        <input
                            className="form-control text-center w-100 "
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            defaultValue={name}
                            value={name}
                            required
                        />
                    </div>
                </div>

                <div class="mb-3 row ">
                    <label class="col-sm-3 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-9">
                        <input
                            className="form-control text-center w-100"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            defaultValue={username}
                            value={username}
                        />
                    </div>
                </div>

                <div className="mb-3 row ">
                <label className="col-sm-3 col-form-label">
                        Current Password
                    </label>
                    <div className="col-sm-9">
                        <input
                            className="form-control text-center w-100"
                            type="password"
                            placeholder="***************"
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            defaultValue={currentPassword}
                            value={currentPassword}
                        />

                    </div>

                    <label className="col-sm-3 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-9">
                        <input
                            className="form-control text-center w-100"
                            type="password"
                            placeholder="***************"
                            onChange={(e) => setPassword(e.target.value)}
                            defaultValue={password}
                            value={password}
                        />

                    </div>
                    <label className="col-sm-3 col-form-label">
                        Retype Password
                    </label>
                    <div className="col-sm-9">
                        <input
                            className="form-control text-center w-100"
                            type="password"
                            placeholder="***************"
                            onChange={(e) => setRetypePassword(e.target.value)}
                            defaultValue={retypePassword}
                            value={retypePassword}
                        />
                        <p style={{ color: "red" }}>{errorMsg}</p>
                        <div className="action-button align-self-center m-2">
                            <button
                                className="btn btn-outline-success m-4"
                                onClick={onSavePasswordHandler}
                            >
                                Change Password
                            </button>
                        </div>
                    </div>


                </div>

                <div className="mb-3 row">
                    <label className="col-sm-3 col-form-label">
                        Date created:
                    </label>
                    <div className="col-sm-9">
                        <p className="form-control w-100"> 11/30/22 {currentUser.date_joined}</p>
                    </div>
                </div>
            </form>
            <div className="action-button align-self-center m-2">
                <button
                    className="btn btn-outline-success m-4"
                    onClick={onSubmitFormHandler}
                >
                    Save changes
                </button>
                <button className="btn btn-outline-danger m-1">
                    {" "}
                    Delete Account{" "}
                </button>
            </div>
        </section>
    );
};
export default ProfilePage;
