import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import Navbar from './Pages/Shared/Navbar';
import Review from './Pages/Home/Review';
import Contact from './Pages/Home/Contact';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment'
function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login/>} />
        <Route path="appointment" element={<Appointment/>} />
        <Route path="review" element={<Review/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
