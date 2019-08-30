import React from 'react';
import './App.css';
import Search from './Search.js';
import Trending from './Trending.js';
import BestSelling from './BestSelling.js';
import Categories from './Categories.js';
import ProductCard from './ProductCard.js';
import Related from './Related.js';
import Hello from './Hello.js';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link} from 'react-router-dom';

function Welcome() {
  return (
    <React.Fragment>
      <Hello />
    </React.Fragment>
  )
}

function General() {
  return (
    <React.Fragment>
      <Search />
      <main>
        <div className="container">
          <Trending />
          <BestSelling />
        </div>
      </main>
      <Categories />
    </React.Fragment>
  );
}

function Details() {
  return (
    <React.Fragment>
      <main>
        <div className="container">
          <ProductCard />
          <Related />
        </div>
      </main>
    </React.Fragment>
  );
}

function App() {
  return (
     <Router>
      <Route path="/" exact component={Welcome} />
      <Route path="/list/" exact component={General} />
      <Route path="/details/" component={Details} />
    </Router>
  );
}

export default App;