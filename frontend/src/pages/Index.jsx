import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (!storedUsername) {
            navigate("/login");
        } else {
            setUsername(storedUsername);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/login");
    };
const formattedUsername = username.charAt(0).toUpperCase() + username.slice(1);

    return (
        <div className="container mt-4">
            <h2>Welcome, {formattedUsername}!</h2>
            <button onClick={handleLogout} className="btn btn-danger mt-3">Logout</button>
        </div>
    );
};

export default Index;
