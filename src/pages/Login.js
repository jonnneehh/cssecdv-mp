import './css/Login.css'
import axios from 'axios';
import { useState } from "react"

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const axiosPostData = async() => {
        const postData = {
            username: username,
            password: password,
        }

        await axios.post('http://localhost:4000/login', postData)
        .then(res => setError(<p className="success">{res.data}</p>))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!username) {
            setError(<p className="required">Please fill out the required fields</p>)
        } 
        else if (!password){
            setError(<p className="required">Please fill out the required fields</p>)
        }
        else {
            setError('')
            axiosPostData()
        }
    }

    return(
        <>
         <div className = "Login">
            <form id="login_form" onSubmit={handleSubmit} >
                <div className="form_div">
                    <div className="row" id="user_div">
                        <label htmlFor="uname"> Username: </label>
                        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        <small id="userError"></small>
                    </div>

                    <div className="row" id="login_pword_div">
                        <label htmlFor="pword"> Password: </label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <small id="login_pwordError"></small>
                    </div> 

                    {error}

                    <div className="row" id="bottom_div">
                        <div id="button_div"><button type="submit" id="login"> Sign in </button></div>
                        <p> Don't have an account? <a href="/register"> Register here. </a></p>
                    </div>
                </div> 
            </form>
         </div>   
        </>
    )
}

export default Login; 