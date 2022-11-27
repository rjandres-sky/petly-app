import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const LandingPages = () => {
    const navigate = useNavigate()

    const onClickLoginHandler = () => {
        navigate ('/login')
    }

    const onClickRegisterHandler = () => {
        navigate ('/register')
    }

    return (
        <div className='landing-page container'> 
            <div> LOGOOO </div>
            Welcome to PetLy!
            <button onClick={onClickLoginHandler}> Login </button>
            <button onClick={onClickRegisterHandler}> Register </button>
        </div>
    )
}

export default LandingPages