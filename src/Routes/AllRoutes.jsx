import React from 'react'
import { Routes, Route } from "react-router-dom";
import Main from '../Pages/Main';
import Globe from '../Components/Globe';
import GitHubStats from '../Components/GitHubStats';
import Navbar from '../Components/Navbar';
import SideNav from '../Components/SideNav';
import Linkdin from '../Components/Linkdin';
import Skills from '../Pages/Skills';
import Message from '../Components/Message';
import Projects from '../Pages/Projects';
const AllRoutes = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/globe" element={<Globe />}></Route>
        <Route path="/git" element={<GitHubStats />}></Route>
        <Route path="/nav" element={<Navbar />}></Route>
        <Route path="/sidenav" element={<SideNav />}></Route>
        <Route path="/linkdin" element={<Linkdin />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/msg" element={<Message />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    
    </div>
  )
}

export default AllRoutes
