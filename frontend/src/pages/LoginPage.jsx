import { useState } from "react"
import { useDispatch } from 'react-redux';
import { Link , useNavigate} from "react-router-dom"

const LoginPage = () => {
    const dispatch = useDispatch()

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const onChangeUsernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const onChangePasswordHandler = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault(); 
        dispatch({
            type: 'LOGIN',
            payload:{
                username: username,
                password: password
            } })
        setUsername('')
        setPassword('')
    }

    return (
        <div className="login container">
            <h2> Login </h2>
            <form onSubmit={onSubmitFormHandler}>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange = {onChangeUsernameHandler}
                />
                <br/>
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange = {onChangePasswordHandler}
                />
                <br/>
                <button type="submit"> Login </button>
            </form>
            <p> No account? <Link to ='/register'> Register </Link> </p>
        </div>
    )
}

export default LoginPage