import { useState } from "react";

//sample profile picture
import "../images/vecteezy_dog-face-logo_6720668.jpg";
import Navbar from "../components/SideBar/Navbar";

const ProfilePage = () => {
    const [ name, setName ] = useState('')
    const [ password, setPassword ] = useState(null)
    const [ profilePicture, setProfilePicture ] = useState(null)
    const [ username, setUsername ] = useState ('')

    return (
        <section className="profile-page d-flex container-fluid card w-50 mt-5 p-5 shadow-lg">
            <Navbar/>
{/*             <div className=" header d-flex justify-content-between ">
                <button className="btn btn-outline-success m-4">
                    Save changes
                </button>
                <button className="btn btn-outline-warning m-4">Logout</button>
            </div> */}
            <p className="text-center h2"> My Pet Profile </p>
            <form className="pet-data card-body ">
                <div className="profile-pic d-flex align-items-center justify-content-center m-1 p-1 form-outline">
                    <label class="btn btn-default">
                        <input type="file" hidden />
                        <img
                            className="rounded-circle shadow-4-strong h-25 w-25 shadow-lg"
                            value="!!insert value here"
                            src={require("../images/vecteezy_dog-face-logo_6720668.jpg")}
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
                        value=""
                    />
                </div>
                <div className="username d-flex align-items-center justify-content-center m-1 p-1 form-outline">
                    <input
                        className="form-control text-center w-50"
                        type="text"
                        placeholder="{username}"
                        value=""
                    />
                </div>
                <div className="password d-flex align-items-center justify-content-center m-1 p-1 form-outline">
                    <input
                        className="form-control text-center w-50"
                        type="password"
                        placeholder="**************"
                        value=""
                    />
                </div>
                <div className="date-created d-flex justify-content-center">
                    <p> Date created : {"insert value"} </p>
                </div>
            </form>
            <div className="action-button align-self-center m-2">
                <button className="btn btn-outline-info m-1">
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
