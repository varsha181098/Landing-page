import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Courses from "./Components/Courses";
import Contact from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Internship from "./Components/Internship";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="courses" element={<Courses/>}/>
     <Route path="aboutUs" element={<AboutUs/>}/>
     <Route path="services" element={<Internship/>}/>
     <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
