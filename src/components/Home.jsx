import React from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function Home({ setUsername, setToken }) {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    navigate("/register");
  }

  return (
    <div className="home">
      <h1>Welcome to the Homepage</h1>
      <Login setUsername={setUsername} setToken={setToken} />
      <button className="profile-btn" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
}

export default Home;
