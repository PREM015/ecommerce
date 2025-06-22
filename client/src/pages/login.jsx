import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("📤 Sending login data:", formData);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData
      );

      console.log("🔁 Login API Response:", res.data);

      if (res.data?.user) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
        console.log("✅ Login success, navigating to dashboard...");
        navigate("/dashboard");
      } else {
        console.warn("⚠️ No user data received");
        setMsg("⚠️ No user data returned");
      }
    } catch (err) {
      console.error("❌ Login failed", err.response?.data || err.message);
      setMsg(err.response?.data?.msg || "Login failed ❌");
    }
  };

  return (
    <div>
      <h2>🔐 Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          onChange={handleChange}
          required
        /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          onChange={handleChange}
          required
        /><br />

        <button type="submit">Login</button>
      </form>
      {msg && <p style={{ color: "red" }}>{msg}</p>}
    </div>
  );
}

export default Login;
