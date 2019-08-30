import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../node_modules/react-owl-carousel2/src/owl.carousel.css';
import './App.css';
import './style.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link} from 'react-router-dom';
const API = 'http://www.json-generator.com/api/json/get/cfSynsxYfC?indent=2';

class Related extends React.Component {

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
                <div className="related-products-wrap">
                        <div className="text-description">
                            <h2>Related products</h2>
                            <a href="" className="see-all">See all</a>
                        </div>
                    <OwlCarousel ref="related-product" options={options} id="related-product">
                        {names.map(name =>
                            <div className="related-product-card" key={name._id}>
                                <div className="related-product-price">${name.price}</div>
                                <img src={name.picture} alt="Related product" />
                                <Link to={"/details/" + name._id}><h3 className="related-product-name">{name.name}</h3></Link>
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

export default Related;