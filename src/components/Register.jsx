import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      const result = await response.json();
      console.log("Signup Result: ", result);
      setSuccessMessage(result.message);
      setUsername("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="register">
      <h1>Register Here</h1>
      <label htmlFor="username" style={{ display: "none" }}>
        Username
      </label>
      <input
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        id="username"
        name="username"
        placeholder="Username"
      />
      <label htmlFor="password" style={{ display: "none" }}>
        Password
      </label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        id="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
}

export default Register;
