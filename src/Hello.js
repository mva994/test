import React from 'react';
import './App.css';
import './style.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link} from 'react-router-dom';

class Hello extends React.Component {
    render() {
        return (
          <div className="container">
            <div className="title-wrap">
                <p>Karamtaj</p>
                <h1>Buy gift for beloved one</h1>
            </div>
            <div className="image-wrap"></div>
            <div className="explore-wrap">
                <Link to="/list/">Explore shop</Link>
                <a href="#">Learn more</a>
            </div>
          </div>
        );
    }
}

export default Hello;