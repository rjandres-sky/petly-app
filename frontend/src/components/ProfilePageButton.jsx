import { useNavigate } from "react-router-dom"

    const ProfilePageButton = () => {
        const navigate = useNavigate()

        const onClickHandler = () => {
            navigate('/profile')
        }

        return(
            <button onClick={onClickHandler}> My Pet Profile </button>
        )
}
export default ProfilePageButton