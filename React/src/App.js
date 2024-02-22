import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/scripts/Home";
import Logout from "./components/scripts/Logout";
import Login from "./components/scripts/Login";
import Register from "./components/scripts/Register";
import FAQ from "./components/scripts/FAQ";
import CreateEvent from "./components/scripts/CreateEvent";
import ShowEvent from "./components/scripts/ShowEvent";
import ContactUs from "./components/scripts/ContactUs";
import MyProfile from "./components/scripts/MyProfile";
import AdminDashboard from "./components/scripts/AdminDashboard";

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
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
