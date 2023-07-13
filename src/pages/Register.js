import './css/Register.css'
import axios from 'axios';
import { useState } from "react"

function Register(){
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [mobilenum, setMobilenum] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpass, setConfirmpass] = useState('')
    const [error, setError] = useState('')

    const axiosPostData = async() => {
        const postData = {
            username: username,
            firstname: firstname,
            lastname: lastname, 
            email: email,
            mobilenum: mobilenum,
            password: password,
            confirmpass: confirmpass
        }

        await axios.post('http://localhost:4000/register', postData)
        .then(res => {
            if(res.data.status === 200){
                setError(<p className="error">SUCESSFULLY REGISTERED</p>)
            }
            else setError(<p className="error">{res.data.message}</p>)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
         
        if (!username) {
            setError(<p className="required">Please fill out the required fields</p>)
        } 
        else if (!firstname){
            setError(<p className="required">Please fill out the required fields</p>)
        }
        else if (!lastname){
            setError(<p className="required">Please fill out the required fields</p>)
        }
        else if (!email){
            setError(<p className="required">Please fill out the required fields</p>)
        }
        else if (!mobilenum){
            setError(<p className="required">Please fill out the required fields</p>)
        }
        else if (!password){
            setError(<p className="required">Please fill out the required fields</p>)
        }
        else if (!confirmpass){
            setError(<p className="required">Please fill out the required fields</p>)
        }
        else {
            setError('')
            axiosPostData()
        }
    }
    
    return(
        <>
         <div className = "Register">
            <form id="reg_form" onSubmit={handleSubmit}>
                <div className="form_div">
                    <div className="row" id="user_div">
                        <label htmlFor="user"> Username: </label>
                        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        <small id="userError"></small>
                    </div>

                    <div className="row" id="firstname_div">
                        <label htmlFor="firstname"> First Name: </label>
                        <input type="text" name="firstname" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
                        <small id="firstnameError"></small>
                    </div>

                    <div className="row" id="lastname_div">
                        <label htmlFor="lastname"> Last Name: </label>
                        <input type="text" name="lastname" id="lastname"  value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
                        <small id="lastnameError"></small>
                    </div>

                    <div className="row" id="email_div">
                        <label htmlFor="email"> Email: </label>
                        <input type="text" name="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <small id="emailError"></small>
                    </div>

                    <div className="row" id="mobilenum_div">
                        <label htmlFor="mobilenum"> Mobile Number: </label>
                        <input type="text" name="mobilenum" id="mobilenum" value={mobilenum} onChange={(e) => setMobilenum(e.target.value)} required/>
                        <small id="mobilenumError"></small>
                    </div>
                    
                    <div className="row" id="pword_div">
                        <label htmlFor="pword"> Password: </label>
                        <input type="password" name="password" id="password"  value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <small id="pwordError"></small>
                    </div>

                    <div className="row" id="confirmpass_div">
                        <label htmlFor="confirmpass"> Confirm Password: </label>
                        <input type="password" name="confirmpass" id="confirmpass"  value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} required/>
                        <small id="confirmpassError"></small> 
                    </div>

                    {error}

                    <div className="row" id="button_div">
                        <button type="submit" id="register"> Sign up </button>
                        <p> Already have an account? <a href="/login"> Sign in here. </a> </p>
                    </div>
                </div>
            </form>
        </div>   
        </>
    )
}

export default Register;