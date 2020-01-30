import React from 'react';
import './App.css';
import Nav from './menu';
import Home from './home';
import About from './about';
import Shop from './shop';
import Creative from './creative';
import Contact from './contact';
import Footer from './footer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <Home/>
      <About/>
      <Shop/>
      <Creative/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
