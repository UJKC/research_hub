import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/Homepage';
import Login from './pages/Login';
import AboutUs from './pages/Aboutus';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={AboutUs} />
      </Routes>
    </Router>
  );
}

export default App;
