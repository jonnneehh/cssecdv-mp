import './css/Login.css'
import axios from 'axios';

function handleSubmit(){
    
}

async function Authenticate(){


    await axios.post("http://localhost:4000/test")
}

function Login(){
    return(
        <>
         <div className = "Login">
            <form id="login_form" /*action="/login" method="POST"*/>
                <div class="form_div">
                    <div class="row" id="user_div">
                        <label for="uname"> Username: </label>
                        <input type="text" name="username" id="username"/>
                        <small id="userError"></small>
                    </div>

                    <div class="row" id="login_pword_div">
                        <label for="pword"> Password: </label>
                        <input type="password" name="password" id="password"/>
                        <small id="login_pwordError"></small>
                    </div>

                    <div class="row" id="bottom_div">
                        <div id="button_div"><button type="submit" id="login" onClick={handleSubmit()}> Sign in </button></div>
                        <p> Don't have an account? <a href="/register"> Register here. </a></p>
                    </div>
                </div>
            </form>
         </div>   
        </>
    )
}

export default Login; 