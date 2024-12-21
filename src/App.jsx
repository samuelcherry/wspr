import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid-container">
        <Nav className="nav" />
        <MainContent className="main-content" />
      </div>
    </>
  );
}

export default App;
