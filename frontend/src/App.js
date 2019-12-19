import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Fib from './Fib';
import About from './About';

export default () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <br />
        <Route exact path='/' component={Fib} />
        <Route path='/about' component={About} />
      </Router>
    </header>
  </div>
);
