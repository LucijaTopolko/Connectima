import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/scripts/Home";
import Logout from "./components/scripts/Logout";
import Login from "./components/scripts/Login";
import Register from "./components/scripts/Register";

function App() {
  const accessToken = localStorage.getItem('accessToken');

  return (
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
