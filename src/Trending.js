import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../node_modules/react-owl-carousel2/src/owl.carousel.css';
import './App.css';
import './style.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link} from 'react-router-dom';
const API = 'http://www.json-generator.com/api/json/get/cfSynsxYfC?indent=2';

class Trending extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            names: []
        };
    }

    componentWillMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ names: arraySlice(data, 3) }));

        function arraySlice(arr, length) {
            return arr.filter(function(item, i, arr) {
                return(item.index < length)
            });
        }
    }

    render() {
        const { names } = this.state;

        const options = {
            margin: 10,
            items: 1
        };
        
        return (
            <React.Fragment>
                <div className="trending-wrap">
                        <div className="text-description">
                            <h2>Todays trending</h2>
                            <p className="sub-h2 today-date">20th May</p>
                        </div>
                    <OwlCarousel ref="trending" options={options} id="trending">
                        {names.map(name =>
                            <div className="trending-card" key={name._id}>
                                <div className="trending-card-left-section">
                                    <div className="trending-price">${name.price}</div>
                                    <div className="violet-over"></div>
                                    <img src={name.picture} alt={name.name} />
                                </div>
                                <div className="trending-card-right-section">
                                    <Link to={"/details/" + name._id}><h3>{name.name}</h3></Link>
                                    <p className="store-name">{name.company}</p>
                                    <div className="rating">
                                        <p>{Math.round((name.rate[0] + name.rate[1] + name.rate[2] + name.rate[3] + name.rate[4])/5)}</p>
                                    </div>
                                    <a href="" className="add-to-cart">Add to cart</a>
                                </div>
                            </div>
                        )}
                    </OwlCarousel>
                </div>
            </React.Fragment>
        );
    }
}

export default Trending;