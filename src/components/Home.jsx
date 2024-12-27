import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

function Home({ setUsername, setToken }) {
  return (
    <div className="home">
      <h1>Welcome to the Homepage</h1>
      <Login setUsername={setUsername} setToken={setToken} />
      <Link to="/register" setToken={setToken}>
        <button className="profile-btn">Register</button>
      </Link>
    </div>
  );
}

export default Home;
