import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';
import About from './about/About';
import Pricing from './pricing/Pricing';
import Program from './program/Program';

function App() {
  return (
    <Router>
    <Navbar />
    <Homepage />
    <Program />
    <Pricing />
    <About />
    </Router>
  );
}

export default App;
