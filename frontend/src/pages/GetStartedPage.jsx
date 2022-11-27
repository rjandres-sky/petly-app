import { useNavigate} from "react-router-dom"

const GetStartedPage = () => {
    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate('/news-feed')
    }
    return(
        <div className="get-started container">
            <h2> Congratulations </h2>
            <p> You have successfully joined the community! </p>
            <button onClick={onClickHandler}> Get Started </button>
        </div>
    )
}

export default GetStartedPage