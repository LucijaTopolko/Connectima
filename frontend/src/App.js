import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/scripts/Header';
import Footer from './components/scripts/Footer';
import Home from './components/scripts/Home';
import Faq from "./components/scripts/Faq";
import Support from "./components/scripts/Support";
import UserGuide from "./components/scripts/UserGuide";
import Contact from "./components/scripts/Contact";

function App() {
    const accessToken = localStorage.getItem('accessToken');
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/faq' element={<Faq/>}/>
                    <Route path='/support' element={<Support/>}/>
                    <Route path='/guide' element={<UserGuide/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
