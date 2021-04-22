
import './App.css';
import React from 'react'
import Header from './components/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
 
  
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
        <Switch>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
