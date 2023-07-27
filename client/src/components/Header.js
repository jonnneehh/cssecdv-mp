import './css/Header.css'
import Logo from '../logo.png'

function Header(){
    return(
        <>
         <div className = "Header">
            <div className = "header-logo">
                <img src={Logo} alt="Database Logo" />
                <p>Database System</p>
            </div>
            <div className = "header-links">
                <a href = "/login">Login</a>
                <a href = "/register">Register</a>
            </div>
         </div>
        </>
    )
}

export default Header;