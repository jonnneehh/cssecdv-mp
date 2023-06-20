import './css/Register.css'

function Register(){
    return(
        <>
         <div className = "Register">
            <form id="reg_form" action="/register" method="POST">
                <div class="form_div">
                    <div class="row" id="user_div">
                        <label for="user"> Username: </label>
                        <input type="text" name="username" id="username" required/>
                        <small id="userError"></small>
                    </div>

                    <div class="row" id="email_div">
                        <label for="email"> Email: </label>
                        <input type="email" name="email" id="email" required/>
                        <small id="emailError"></small>
                    </div>
                    
                    <div class="row" id="pword_div">
                        <label for="pword"> Password: </label>
                        <input type="password" name="password" id="password" required/>
                        <small id="pwordError"></small>
                    </div>

                    <div class="row" id="cpword_div">
                        <label for="cpword"> Confirm Password: </label>
                        <input type="password" name="cpword" id="cpword" required/>
                        <small id="cpwordError"></small> 
                    </div>

                    <div class="row" id="button_div">
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