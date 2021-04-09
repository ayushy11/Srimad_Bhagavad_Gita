import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Chapter from './components/Chapter';
import Verse from './components/Verse';
import About from './components/About';
import './App.css';

function App() {  

  return (
    <div className="App">
      <Navbar />
      <Title />
      <Menu />
      <Switch>               
        <Route exact path="/" component={Chapter} />
        <Route exact path="/verse" component={Verse} />
        <Redirect to="/" />
      </Switch>      
      <About />
      <Footer />
    </div>
  );
}

export default App;
