import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import Navbar from './Pages/Shared/Navbar';
import Appointment from './Pages/Home/Appointment';
import Review from './Pages/Home/Review';
import Contact from './Pages/Home/Contact';
import Login from './Pages/Login/Login';
function App() {
  return (
    <div>
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
