import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import scissors from "../../images/barber-scissors-24.png";
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const isActive = (path) => location.pathname === path;

    const menuItems = (
        <React.Fragment>
            <li>
                <Link
                    className={`nav_link cursor-pointer transition-colors duration-300 ${isActive('/') ? 'text-primary' : 'hover:text-primary'}`}
                    to="/"
                >
                    HOME
                </Link>
            </li>
            <li>
                <Link
                    className={`nav_link cursor-pointer transition-colors duration-300 ${isActive('/service') ? 'text-primary' : 'hover:text-primary'}`}
                    to="/service"
                >
                    SERVICE
                </Link>
            </li>
            <li>
                <Link
                    className={`nav_link cursor-pointer transition-colors duration-300 ${isActive('/about') ? 'text-primary' : 'hover:text-primary'}`}
                    to="/about"
                >
                    ABOUT
                </Link>
            </li>
            <li>
                <Link
                    className={`nav_link cursor-pointer transition-colors duration-300 ${isActive('/gallery') ? 'text-primary' : 'hover:text-primary'}`}
                    to="/gallery"
                >
                    GALLERY
                </Link>
            </li>
            <li>
                <Link
                    className={`nav_link cursor-pointer transition-colors duration-300 ${isActive('/blog') ? 'text-primary' : 'hover:text-primary'}`}
                    to="/blog"
                >
                    BLOG
                </Link>
            </li>

            {user?.uid ? (
                <>
                    <li>
                        <Link
                            className={`uppercase transition-colors duration-300 ${isActive('/dashboard') ? 'text-primary' : 'hover:text-primary'}`}
                            to="/dashboard"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <button className="btn btn-primary uppercase hover:text-secondary" onClick={handleLogOut}>
                            Sign out
                        </button>
                    </li>
                </>
            ) : (
                <li>
                    <Link
                        className="btn btn-primary uppercase text-white hover:text-secondary transition-colors duration-300"
                        to="/login"
                    >
                        LogIn
                    </Link>
                </li>
            )}
        </React.Fragment>
    );

    const SizeNav = {
        "color": "white",
        "font-family": "'Roboto Condensed', sans-serif"
    };

    const forText = {
        "font-family": "'Bebas Neue', sans-serif"
    };

    return (
        <div className="navbar p_header bg-neutral text-neutral-content fixed top-0 left-0 right-0 z-50 justify-between">
            <div style={SizeNav} className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link style={forText} to="/" className="logo btn btn-ghost normal-case text-3xl">
                    <span><img src={scissors} alt="" /></span>
                    <span className="text-primary">U</span>rban<span className="text-primary">E</span>legance
                </Link>
            </div>
            <div style={SizeNav} className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
