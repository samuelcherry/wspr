import Nav from "./Nav";
import MainContent from "./MainContent";
import React from "react";

function getUserId() {
  const userId = sessionStorage.getItem("userId");
  return userId;
}

const Feed = ({ username, setUsername }) => {
  const userId = getUserId();

  return (
    <div>
      <div className="grid-container">
        <Nav className="nav" username={username} setUsername={setUsername} />
        <MainContent
          className="main-content"
          username={username}
          userId={userId}
        />
      </div>
    </div>
  );
};

export default Feed;
