// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Homepage';
import About from './pages/Login';
import Features from './pages/Featurespage';
import Signup from './pages/Signup'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Router>
  );
};

export default App;
