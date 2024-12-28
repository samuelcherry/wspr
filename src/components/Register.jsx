import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState({ success: "", error: null });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || "Failed to submit the post.");
      setMessage({ success: result.message, error: null });
      setFormData({ username: "", password: "" });
      navigate("/");
    } catch (error) {
      setMessage({ success: "", error: error.message });
    }
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Register Here</h1>
        <input
          required
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
          required
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
      {message.success && <p>{message.success}</p>}
      {message.error && <p>{message.error}</p>}
    </div>
  );
}

export default Register;
