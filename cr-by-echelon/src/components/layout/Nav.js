import "./nav.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
const Nav = () => {
    // get back to this
    // to change bg when user scroll   
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position)
    }


    return (
        <nav style={{
            backgroundColor: scrollPosition > 40 ? "#c5aa73" : "transparent",
            transition: "background-color 300ms ease-in-out",

        }}>
            <Link to="/" className="logo" >LOGO</Link>
            <div className="main-nav" >
                <Link to="/" className="nav-1" >Home</Link>
                <Link to="/gallery" className="nav-2" >Gallery</Link>
                <Link to="/contact" className="nav-3" >Contact Us</Link>
            </div>
        </nav >
    );
}

export default Nav
    ;