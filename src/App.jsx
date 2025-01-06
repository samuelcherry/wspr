import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Feed from "./components/Feed";
import Home from "./components/Home";

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={<Home setUsername={setUsername} setToken={setToken} />}
        />
        {/* Registration Route */}
        <Route path="/register" element={<Register />} />
        {/* Feed Route */}
        <Route
          path="/feed"
          element={<Feed username={username} setUsername={setUsername} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
