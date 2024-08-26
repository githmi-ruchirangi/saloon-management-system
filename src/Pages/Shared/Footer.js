import React from 'react';
import { Link } from 'react-router-dom';
import scissors from "../../images/barber-scissors-24.png";
import '@fortawesome/fontawesome-free/css/all.min.css';


import './Footer.css';

const Footer = () => {

    const SizeNav = {
        "color": "white",
        "fontFamily": "'Roboto Condensed', sans-serif"
    };

    const forText = {
      "font-family": "'Bebas Neue', sans-serif"
  };

    return (
        <div style={SizeNav}>
            <div className="beforefooter">
                <div className="box">
                <Link style={forText} to="/" className="logo btn btn-ghost normal-case text-3xl">
                    <span><img src={scissors} alt="" /></span>
                    <span className="text-primary">U</span>rban<span className="text-primary">E</span>legance
                </Link>
                    <div className="bf-text">Exclusively for Men </div>
                    <p className="para">
                    Your premier destination for exceptional grooming services. Our skilled team offers expert cuts, stylish trims, and personalized treatments for men. Whether you're seeking a sharp new look or a relaxing experience, we've got you
                    </p>

                    <div className="bf-text">Subscribe For Offers</div>

                    <div className="subscribe">
                        <input type="text" name="" id="" />
                        <button className="btn">subscribe</button>
                    </div>
                </div>

                <div className="box">
                    <div className="bf-text">Quick Links</div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/service">Services</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>

                    <div className="bf-text">Follow Us</div>
                    <div className="icons">
                        <a href="#" className="fa-brands fa-facebook-f"></a>
                        <a href="#" className="fa-brands fa-google"></a>
                        <a href="#" className="fa-brands fa-instagram"></a>
                        <a href="#" className="fa-brands fa-youtube"></a>
                    </div>
                </div>

                <div className="box">
                    <div className="bf-text">Say Hi!</div>
                    <ul className="SayHi">
                        <li><a href="mailto:info@example.com">info@example.com</a></li>
                        <li><Link to="/about.html">Contact Us</Link></li>
                    </ul>
                    <div className="bf-text">Call Us</div>
                    <ul className="SayHi">
                        <li>Phone: +1 2334325532</li>
                        <li>Toll Free: +1 2334325532</li>
                    </ul>

                    <div className="bf-text">Find Us</div>
                    <div className="address">
                        123 Fifth Avenue, Opp Hut, New York, USA
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="c_padding footer p-10 text-slate-300">
                <div className="fbox">Copyright &copy; 2024 Urban Elegance</div>
                <div className="fbox">Powered By Urban Elegance</div>
            </footer>
        </div>
    );
};

export default Footer;
