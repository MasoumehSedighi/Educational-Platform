import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CourseDetail from './components/CourseDetail';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/:id" element={<CourseDetail />} />
    </Routes>
  </Router>
  );
};

export default App;