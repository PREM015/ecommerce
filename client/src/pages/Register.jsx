import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
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
      console.log("📤 Sending registration data", formData);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        formData
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);

      console.log("✅ Registration success");
      navigate("/dashboard");
    } catch (err) {
      console.error("❌ Registration failed", err.response?.data || err.message);
      setMsg(err.response?.data?.msg || "Registration failed ❌");
    }
  };

  return (
    <div>
      <h2>📝 Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        /><br />

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
          autoComplete="new-password"
          onChange={handleChange}
          required
        /><br />

        <button type="submit">Register</button>
      </form>
      {msg && <p style={{ color: "red" }}>{msg}</p>}
    </div>
  );
}

export default Register;
