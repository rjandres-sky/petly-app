import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LandingPages = () => {
    const navigate = useNavigate();

    const onClickLoginHandler = () => {
        navigate("/login");
    };

    const onClickRegisterHandler = () => {
        navigate("/register");
    };

    return (
        <section className="justify-content-center">

                                    <h2 className="text-uppercase text-center m-xl-5">
                                        Welcome to PetLy!
                                    </h2>
                                    <div className="text-center m-xl-5 ">
                                        <button 
                                            className="btn btn-primary"
                                            onClick={onClickLoginHandler}>
                                            {" "}
                                            Login{" "}
                                        </button>
                                    </div>
                                    <div className="text-center m-xl-5">
                                        <button
                                        className="btn btn-primary"
                                            onClick={onClickRegisterHandler}
                                        >
                                            {" "}
                                            Register{" "}
                                        </button>
                                    </div>
        </section>
    );
};

export default LandingPages;
