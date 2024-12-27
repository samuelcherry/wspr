import Nav from "./Nav";
import MainContent from "./MainContent";
import React, { useState } from "react";
import Login from "../Login/Login";

function setToken(userToken) {
  sessionStorage.setItem("token", token);
}

function getToken() {
  const token = sessionStorage.getItem("token");
  return token;
}

function getUserId() {
  const userId = sessionStorage.getItem("userId");
  return userId;
}

const Feed = ({ username, setUsername }) => {
  const token = getToken();
  const userId = getUserId();

  if (!token) {
    {
      return <Login setToken={setToken} setUsername={setUsername} />;
    }
  }
  return (
    <div>
      <div className="grid-container">
        <Nav
          className="nav"
          token={token}
          setToken={setToken}
          username={username}
          setUsername={setUsername}
        />
        <MainContent
          className="main-content"
          token={token}
          setToken={setToken}
          username={username}
          userId={userId}
        />
      </div>
    </div>
  );
};

export default Feed;
