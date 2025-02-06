import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the token is present in localStorage
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        // Remove the JWT token and username from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setIsLoggedIn(false); // Update state to reflect the logout
        navigate("/login"); // Redirect to login page
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Edunet Foundation</Link>
                <div>
                    {isLoggedIn ? (
                        // Show Logout button if logged in
                        <button className="btn btn-danger" onClick={handleLogout}>
                            Logout
                        </button>
                    ) : (
                        // Show Login and Register buttons if not logged in
                        <>
                            <Link className="btn btn-primary mx-2" to="/login">Login</Link>
                            <Link className="btn btn-success" to="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
