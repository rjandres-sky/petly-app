import { useNavigate } from "react-router-dom";
import "../images/petly_sample_logo.png";
import { Link } from "react-router-dom";

import "../styles/LandingPage.css";

const LandingPages = () => {
    const navigate = useNavigate();

    return (
        <section className="vh-100 vw-auto">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src={require("../images/petly_sample_logo.png")}
                            className="img-fluid"
                            alt="Sample image"
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
                            <p className="h1"> Welcome to PetLy! </p>
                            <p className="h2"> Showcase your pets </p>
                        </div>
                        <div className="divider d-flex align-items-center flex-row my-4"></div>
                        <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
                            <Link to ="/login"> Login </Link>
                            <Link to ="/register"> Register </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPages;
