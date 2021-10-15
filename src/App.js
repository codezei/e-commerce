
import './App.css';
import React from 'react'
import Header from './components/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Catalog from './components/pages/Catalog'
import Contact from "./components/pages/Contact"
import BlogPage from "./components/pages/BlogPage"
import ProductPage from "./components/pages/ProductPage"





import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

function App() {


  return (
    <div className="App">
      
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Header></Header>
        <Switch>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/list">
            <Catalog/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/blog">
            <BlogPage/>
          </Route>
          <Route path="/:id">
            <ProductPage/>
          </Route>
        </Switch>
      </HashRouter>
      

    </div>
  );
}

export default App;
