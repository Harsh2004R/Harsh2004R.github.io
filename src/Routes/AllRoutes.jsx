import React from 'react'
import { Routes, Route } from "react-router-dom";
import Globe from '../Components/Globe';
import Navbar from '../Components/Navbar';
import SideNav from '../Components/SideNav';
import Linkdin from '../Components/Linkdin';
import Skills from '../Pages/Skills';
import Message from '../Components/Message';
import Projects from '../Pages/Projects';
import Contact from "../Pages/Contact";
import Footer from '../Pages/Footer';
import Home from '../Components/Home';
const AllRoutes = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/globe" element={<Globe />}></Route>
        <Route path="/nav" element={<Navbar />}></Route>
        <Route path="/sidenav" element={<SideNav />}></Route>
        <Route path="/linkdin" element={<Linkdin />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/msg" element={<Message />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/footer" element={<Footer />}></Route> */}


      </Routes>

    </div>
  )
}

export default AllRoutes
