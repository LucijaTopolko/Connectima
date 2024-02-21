import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/scripts/Home";
import Logout from "./components/scripts/Logout";
import Login from "./components/scripts/Login";
import Register from "./components/scripts/Register";
import FAQ from "./components/scripts/FAQ";
import CreateEvent from "./components/scripts/CreateEvent";
import ShowEvent from "./components/scripts/ShowEvent";

function App() {

  return (
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/event/:id" element={<ShowEvent />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
