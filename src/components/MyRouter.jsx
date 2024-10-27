import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Blog from './Blog';
import Resume from './Resume';
import Contact from './Contact';
import NavBar from './NavBar';
import Sociallinks from './Sociallinks';

const MyRouter = () => {
  return (
    <Router>
       <Sociallinks />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default MyRouter;
