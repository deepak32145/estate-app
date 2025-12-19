import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

const Login = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        const username = e.target[0].value;
        const password = e.target[1].value;
        try{
            const res = await apiRequest.post('/auth/login',{
                username,
                password,
            });
            localStorage.setItem("user" , JSON.stringify(res.data));
            navigate('/');
        }
        catch(err){
            console.log(err?.response?.data?.error);
            setError(err?.response?.data?.error);
        }
        finally{
            setLoading(false);
        }
    }
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleLogin}>
            <h1>Welcome Back</h1>
            <input type ="text" name="username" placeholder="username" />
            <input type ="password" name="password" placeholder="password" />
            <button disabled={loading}>Login</button>
            {error && <span className="error">{error}</span>}
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
