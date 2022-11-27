import { useState } from "react"
import { useDispatch } from 'react-redux';
import { Link , useNavigate} from "react-router-dom"

const RegisterPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const petTypeValues =  [  
        {  
            name : "dog"
        },
        {  
            name : "cat"
        },
        {  
            name: "fish"
        },
        {  
            name: "birds"
        },
        {  
            name : "rabbit"
        }
        ];
    

    const [ name, setName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ profilePicture, setProfilePicture ] = useState('')
    const [ petType, setPetType ] = useState('')
    const [ petName, setPetName ] = useState('')

    const onChangeNameHandler = (event) => {
        setName(event.target.value)
    }
    const onChangeUsernameHandler = (event) => {
        setUsername(event.target.value)
    }
    const onChangePasswordHandler = (event) => {
        setPassword(event.target.value)
    }
    const onChangeProfilePictureHandler = (event) => {
        setProfilePicture(event.target.value)
    }
    const onChangePetNamehandler = (event) => {
        setPetName(event.target.value)
    }
    const onChangePetTypeHandler = (event) => {
        setPetType(event.target.value)
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault(); 
        dispatch({
            type: 'REGISTER',
            payload:{
                name : name,
                username: username,
                password: password,
                profile_picture: profilePicture,
                pet_type: petType,
                pet_name: petName,
            } })
        setName('')
        setUsername('')
        setPassword('')
        setProfilePicture('')
        setPetType('')
        setPetName('')
        navigate('/get-started')
    }

    return (
        <div className="register container">
            <h2> Register </h2>
            <form onSubmit={onSubmitFormHandler}>
                <input 
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange = {onChangeNameHandler}
                /><br/>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange = {onChangeUsernameHandler}
                /><br/>
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange = {onChangePasswordHandler}
                /><br/>
                <input 
                    type="text"
                    placeholder="Pet Name"
                    value={petName}
                    onChange = {onChangePetNamehandler}
                /><br/>
                <label htmlFor="profile-picture"> Choose profile picture </label><br/>
                <input 
                    id="profile-picture"
                    type='file'
                    value={profilePicture}
                    onChange={onChangeProfilePictureHandler}
                /><br/>
                <select value={petType} onChange= {onChangePetTypeHandler}>
                    <option> -- Select Pet Type -- </option>
                    {
                        petTypeValues.map ((item) =>{
                            return <option> {item.name} </option>
                        } )
                    }
                </select><br/>
                <button type="submit"> Create pet account </button>
            </form>
            <p> Already have an account?  
                <Link 
                to ='/login'> Login </Link> 
                </p>
        </div>
    )
}

export default RegisterPage