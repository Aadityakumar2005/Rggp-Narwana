import Header from './components/Header';
import logo from './assets/narwana logo.jpg'
import g20 from './assets/g20.png'
import Home from './components/Home'
import Course from './components/Course'
import About from './components/About'
import Syllabus from './components/Syllabus'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    
      <Header number="01684-242159" logo={logo} img1={g20} clgname="Rajiv Gandhi Govt. Polytechnic, Narwana" desc="(Approved by AICTE, New Delhi & Govt. of haryana, affiliated to hsbte panchkula)"/>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/course" element={<Course/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/syllabus" element={<Syllabus/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
