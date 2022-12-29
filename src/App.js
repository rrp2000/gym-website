import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';
import About from './about/About';
import Pricing from './pricing/Pricing';
import Program from './program/Program';
import Footer from './footer/Footer';
import AboutMore from './AboutMore/AboutMore';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element = {<> 
        <Homepage />
        <Program />
        <Pricing />
        <About />
      </>} />
      <Route path='/about' element={<AboutMore />} />
    </Routes>
    <Footer />
    </Router> 
  );
}

export default App;
