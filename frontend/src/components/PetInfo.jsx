import { useNavigate } from "react-router-dom"

const PetInfo = ({ name, username, password, petName,petType, profilePicture}) => {
    const navigate = useNavigate()

    return(
        <>
                <li> name : {name}</li>
                <li> username: {username}</li>
                <li> password : { password} </li>
                <li> pet name : { petName } </li>
                <li> pet type : { petType }</li>
                <li> profile picture: { profilePicture } </li>
        </>

    )
}

export default PetInfo