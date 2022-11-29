import { Link } from 'react-router-dom'
import { useState } from 'react';

//sample profile picture 
import "../images/vecteezy_dog-face-logo_6720668.jpg";

const ProfilePage = () => {
    return (
        <section className="profile-page container card w-50 mt-2 shadow-lg">
            <div className=" header d-flex justify-content-between ">
                <button className="btn btn-outline-success m-4">
                    Save changes
                </button>
                <button className="btn btn-outline-warning m-4">Logout</button>
            </div>
            <p className="text-center h2"> My Pet Profile </p>
            <form className="pet-data card-body ">
                <div className="pet-name d-flex align-items-center justify-content-center m-1 p-1 form-outline">
                    <button className="btn">
                        <img
                            className="rounded-circle shadow-4-strong h-25 w-25 shadow-lg"
                            value="!!insert value here"
                            src={require("../images/vecteezy_dog-face-logo_6720668.jpg")}
                            alt="profile_picture"
                        />{" "}
                        <br /> <p> + change profile picture </p>
                    </button>
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
                    Change password
                </button>
                <button className="btn btn-outline-danger m-1">
                    {" "}
                    Delete Account{" "}
                </button>
            </div>
            <div className="m-3">
                <Link to ='/news-feed' > back to news-feed </Link>
            </div>
        </section>
    );
};
export default ProfilePage;
