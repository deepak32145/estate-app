import './register.scss';
import { Link  , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import apiRequest from '../../lib/apiRequest';
const Register = () => {
    const [error , setError] = useState(false); 
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        try {
            const res = await apiRequest.post('/auth/register', {
                username,
                email,
                password,
            });
            navigate('/login');
        } catch (err) {
            setError(err.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }
  return (
    <div className='register'>
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <input type="text" name='username' placeholder='username' />
                <input type="email" name='email' placeholder='email' />
                <input type="password" name='password' placeholder='password' />
                <button disabled={loading}>Register</button>
                {error && <span className='error'>{error}</span>}
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    </div>
  )
};

export default Register;
