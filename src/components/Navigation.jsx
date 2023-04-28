import Logo from "../assets/images/logo.png"
import "./navigation.css"


export default function Navigation() {
    return (
        <nav>
            <img className="logo" src={Logo} alt="airbnb logo" />
        </nav>
    )
}