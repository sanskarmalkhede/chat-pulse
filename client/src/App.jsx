import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Lobby from "./pages/Lobby";
import Room from "./pages/Room";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
