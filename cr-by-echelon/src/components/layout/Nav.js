import "./nav.css"
import { Link } from "react-router-dom"
const Nav = () => {
    // get back to this
    // to change bg when user scroll    

    return (
        <nav>
            <Link to="/" className="logo">LOGO</Link>
            <div className="main-nav">
                <Link to="/" className="nav-1">Home</Link>
                <Link to="/gallery" className="nav-2">Gallery</Link>
                <Link to="/contact" className="nav-3">Contact Us</Link>
            </div>
        </nav>
    );
}

export default Nav
    ;