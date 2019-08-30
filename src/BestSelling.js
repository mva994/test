import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../node_modules/react-owl-carousel2/src/owl.carousel.css';
import './App.css';
import './style.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link} from 'react-router-dom';
const API = 'http://www.json-generator.com/api/json/get/cfSynsxYfC?indent=2';

class BestSelling extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            names: []
        };
    }

    componentWillMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ names: data }));
    }

    render() {
        const { names } = this.state;

        const options = {
            margin: 10
        };
        
        return (
            <React.Fragment>
                <div className="best-selling-wrap">
                        <div className="text-description">
                            <h2>Best selling</h2>
                            <p className="sub-h2">This week</p>
                            <a href="" className="see-all">See all</a>
                        </div>
                    <OwlCarousel ref="best-selling" options={options} id="best-selling">
                        {names.map(name =>
                            <div className="best-selling-card" key={name._id}>
                                <div className="best-selling-price">${name.price}</div>
                                <img src={name.picture} alt="Best selling" />
                                <Link to={"/details/" + name._id}><h3 className="best-selling-name">{name.name}</h3></Link>
                                <div className="rating">
                                    <p>{Math.round((name.rate[0] + name.rate[1] + name.rate[2] + name.rate[3] + name.rate[4])/5)}</p>
                                </div>
                            </div>
                        )}
                    </OwlCarousel>
                </div>
            </React.Fragment>
        );
    }
}

export default BestSelling;