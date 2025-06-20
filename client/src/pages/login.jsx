import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
                email,
                password,
            });
            setMsg(`✅ Welcome, ${res.data.user.name}`);
            console.log("Token:", res.data.token);
        } catch (e) {
            setMsg("❌ Invalid credentials");
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br />
                <button type="submit">Login</button>
            </form>
            {msg && <p>{msg}</p>}
        </div>
    );
};

export default Login;
