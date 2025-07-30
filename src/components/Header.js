import { useState } from "react";
import {LOGO_URL} from "../../public/constants";
import { Link } from 'react-router-dom';

const Title = () => (
    <a href="/">
        <img
            className="logo"
            src={LOGO_URL}
            alt="Food Fire Logo"
            title="Food Fire"
        />
    </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
    // use useState for user logged in or logged out
    const [isLoggedin, setIsLoggedin] = useState(true);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>
                        <Link style={{ textDecoration: "none" }} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to='/about'>About</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to='/contact'>Contact US</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </li>
                    <li>
                        {/* use conditional rendering for login and logout */}
                        {isLoggedin ? (
                            <button
                                className="logout-btn"
                                onClick={() =>  setIsLoggedin(false)}
                            >
                                Logout
                            </button>
                        ) : (
                            <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                                Login
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;