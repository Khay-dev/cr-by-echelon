import "./nav.css"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect, useRef } from "react";
import Logo from "../../img/logo.png"
import newLogo from "../../img/single-log.png"
const Nav = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
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
            backgroundColor: scrollPosition > 50 ? "#d48c46" : "transparent",
            transition: "background-color 300ms ease-in-out",

        }}>
            <div className={scrollPosition > 50 ? 'new-logo' : 'logo'} >
                <Link to="/">
                    <img src={scrollPosition > 50 ? newLogo : Logo} alt="logo" />
                </Link>
            </div>
            <div className="main-nav" ref={navRef} >
                <Link to="/" className="nav-1" >Home</Link>
                <Link to="/gallery" className="nav-2" >Gallery</Link>
                <Link to="/contact" className="nav-3" >Contact Us</Link>
                <a href="mailto:xxxxxxxxxxxx.com" className="nav-3" >Book Now</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </div>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>

        </nav >
    );
}

export default Nav
    ;


