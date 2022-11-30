import { useState } from "react";

//sample profile picture
import "../images/vecteezy_dog-face-logo_6720668.jpg";
import Navbar from "../components/SideBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.Auth)
    const [ name, setName ] = useState(currentUser.name)
    const [ password, setPassword ] = useState(null)
    const [ profilePicture, setProfilePicture ] = useState('')
    const [ username, setUsername ] = useState (currentUser.username)
    const [selectedFile, setSelectedFile] = useState(currentUser.profile_picture)

    const handleProfilePicture = (event) => {
        const file = event.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setSelectedFile( reader.result )
        };

        setProfilePicture(event.target.value);
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name)
        //formData.append('username', username)
        formData.append('profile_picture', selectedFile)
        //formData.append('password', password)
        //formData.append('pet_type', petType)
        

        axios.put('http://localhost:8080/auth/'+currentUser._id, formData)
            .then(result => {
                alert('registered successfuly')
                 dispatch({type : 'LOGIN_SUCCESS', payload : result.data})
             });
    };

    return (
        <section className="profile-page d-flex container-fluid card w-50 mt-5 shadow-lg">
            <Navbar/>
            <div className=" header d-flex justify-content-between ">
                <button className="btn btn-outline-success m-4" onClick={onSubmitFormHandler}>
                    Save changes
                </button>
                <button className="btn btn-outline-warning m-4" onClick={(e) => {
                    e.preventDefault()
                    dispatch({type : 'LOGOUT'}) 
                }
                }>Logout</button>
            </div>
            <p className="text-center h2"> My Pet Profile </p>
            <form className="pet-data ">
                <div className="profile-pic d-flex align-items-center justify-content-center m-1 p-1 form-outline">
                    <label class="btn btn-default">
                        <input type="file" hidden value={profilePicture} onChange={handleProfilePicture}/>
                        <img
                            className="rounded-circle shadow-4-strong h-25 w-25 shadow-lg"
                            value="!!insert value here"
                            src={selectedFile}
                            alt="profile_picture"
                        />{" "}
                        <br />
                    </label>
                </div>
                <div className="pet-name d-flex justify-content-center m-1 p-1 form-outline">
                    <input
                        className="form-control text-center w-50"
                        type="text"
                        placeholder="{pet name}"
                        value={name}
                    />
                </div>
                <div className="username d-flex align-items-center justify-content-center m-1 p-1 form-outline">
                    <input
                        className="form-control text-center w-50"
                        type="text"
                        placeholder="{username}"
                        value={username}
                    />
                </div>
                <div className="password d-flex align-items-center justify-content-center m-1 p-1 form-outline">
                    <input
                        className="form-control text-center w-50"
                        type="password"
                        placeholder="**************"
                        value={password}
                    />
                </div>
                <div className="date-created d-flex justify-content-center">
                    <p> Date created : {currentUser.date_joined} </p>
                </div>
            </form>
            <div className="action-button align-self-center m-2">
                <button className="btn btn-outline-info m-1">
                    Change password
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
