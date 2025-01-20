import "./Header.css"
import logo from "../images/logo.jpg"

function Header (){
    return (
        <header>
            <ul>
            <li><img className="logo" src={logo} alt="logo Polly Patronthèque"/></li>
            <li><h1>Patronthèque in the Pocket</h1></li>
            </ul>
        </header>
    )

}

export default Header