import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("username", response.data.username);
            navigate("/");
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" className="form-control my-2" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" className="form-control my-2" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
