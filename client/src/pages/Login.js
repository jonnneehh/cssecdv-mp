import './css/Login.css'
import AuthContext from "../context/AuthProvider"
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom"

import axios from '../api/axios'
const LOGIN_URL = '/login'
const VIEW_URL = '/view'

function Login(){
    const navigate = useNavigate()
    
    const { setAuth } = useContext(AuthContext);
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        setError('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            if (!username) {
                setError(<p className="required">Please fill out the required fields</p>)
            } 
            else if (!password){
                setError(<p className="required">Please fill out the required fields</p>)
            }
            else {
                const postData = {
                    username: username,
                    password: password,
                }

                const response = await axios.post(LOGIN_URL, postData);
                
                if(response?.data?.success){ 
                    const role = response?.data?.role
                    const accessToken = response?.data?.accessToken

                    console.log(response?.data?.role)

                    setUsername('')
                    setPassword('')
                    setError('')
                    await setAuth({ username, password, role, accessToken });
                    navigate(VIEW_URL)
                }
                else{
                    setError("Invalid Username/Password")
                }
            }  
        }
        catch (err) { 
            console.log(err)
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

                    <p>{error}</p>

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