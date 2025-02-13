
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/ais-logo.png"


const Navbar = () => {

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="navbar-center">
                    <ul>
                        <li><NavLink to="/home" className={({ isActive }) => `${isActive ? 'nav-link-active ' : 'nav-link'}`}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => `${isActive ? 'nav-link-active ' : 'nav-link'}`}>About</NavLink></li>
                        <li><NavLink to="/services" className={({ isActive }) => `${isActive ? 'nav-link-active ' : 'nav-link'}`}>Services</NavLink></li>
                        <li><NavLink to="/portfolio" className={({ isActive }) => `${isActive ? 'nav-link-active ' : 'nav-link'}`}>Portfolio</NavLink></li>
                        <li><NavLink to="/blog" className={({ isActive }) => `${isActive ? 'nav-link-active ' : 'nav-link'}`}>Blog</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => `${isActive ? 'nav-link-active ' : 'nav-link'}`}>Contact Us</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <button className="nav-button">Sign In</button>
                </div>
            </nav>



        </>

    )
}

export default Navbar   