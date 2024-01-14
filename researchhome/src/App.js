import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import AboutUs from './components/Aboutus';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
