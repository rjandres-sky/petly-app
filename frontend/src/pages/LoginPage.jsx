import { useState } from "react"
import { useDispatch } from 'react-redux';
import { Link , useNavigate} from "react-router-dom"
import axios from 'axios'

const LoginPage = ({handleUser}) => {
    const dispatch = new useDispatch()
    const navigate = new useNavigate ()

    const [ errMsg, setErrMsg ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const loginEventHandler = (e) => {
        
        axios.post('http://localhost:8080/auth/login', {
            username : username,
            password : password
        }).then(result => {
                if(result.status === 200 ) {
                    console.log(result.data)
                    alert('Login success!');
                    navigate('/news-feed')
                dispatch({ type: 'LOAD_CURRENTUSER', payload: result.data });
                handleUser(result.data)
                    setErrMsg('');                 
                } else {
                    setErrMsg('Username and Password not found');                  
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="login container">
            <h2> Login </h2>
            <form onSubmit={e => e.preventDefault()}>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <br/>
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <br/>
                {errMsg !== '' && <div className="error-message"><small> {errMsg} </small></div>}
                <input type="submit" value='Login' onClick={loginEventHandler}/>
            </form>
            <p> No account? <Link to ='/register'> Register </Link> </p>
        </div>
    )
}

export default LoginPage