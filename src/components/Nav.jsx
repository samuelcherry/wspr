import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav({ className, setToken, username, setUsername }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      console.log("storedUsername: ", storedUsername);
      setUsername(storedUsername);
    }
  }, [setUsername]);

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    }
  }, [username]);

  async function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("username");
    setUsername("");
    setPassword("");
    navigate("/");
  }

  return (
    <nav className={className}>
      <h2>welcome {username || "Guest"}</h2>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
