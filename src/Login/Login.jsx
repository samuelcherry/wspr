import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const fetchLogin = async (username, password) => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }
    const data = await response.json();
    return { token: data.token, userId: data.userId };
  } catch (error) {
    console.error("Error fething users:", error);
    throw error;
  }
};

const Login = ({ setUsername, setToken }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, userId } = await fetchLogin(username, password);
      if (token) {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("userId", userId);
        console.log("sessionStorage: ", userId);
        setToken(token);
        setUsername(username);
        navigate("/feed");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("An error occurred. Please try again later.");
    }
  };
  return (
    <>
      <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <p className="text-white font-bold">UserName</p>
              <input
                type="text"
                required
                onChange={(e) => setUserName(e.target.value)}
                className="p-3 my-2 rounded text-black"
                placeholder="JohnDoe"
              />
              <p className="text-white font-bold">Password</p>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 rounded text-black"
                placeholder="Please enter a strong password"
              />
              <button
                type="submit"
                className="bg-red-700 py-3 my-6 rounded font-bold px-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
