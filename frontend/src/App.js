import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/scripts/Header';
import Footer from './components/scripts/Footer';
import Home from './components/scripts/Home';

function App() {
    const accessToken = localStorage.getItem('accessToken');
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
