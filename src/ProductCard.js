import React from 'react';
import '../node_modules/react-owl-carousel2/src/owl.carousel.css';
import './App.css';
import './style.css';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Link} from 'react-router-dom';
const API = 'http://www.json-generator.com/api/json/get/cfSynsxYfC?indent=2';

class ProductCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            names: [],
            item: 1
        };

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }

    componentWillMount() {
        const id = window.location.href.substr(-24);
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ names: filterById(data, id) }));

        function filterById(arr, id) {
            return arr.filter(function(item, i ,arr) {
                return(item._id === id)
            });
        }
    }

    componentWillReceiveProps() {
        window.location.reload();
    }

    onIncrease() {
        this.setState(prevState => ({
            item: prevState.item + 1
        }))
    }

    onDecrease() {
        if (this.state.item > 1) {
            this.setState(prevState => ({
                item: prevState.item - 1
        }))}
    }

    render() {
        const { names } = this.state;
        
        return (
            <React.Fragment>
                {names.map(name =>
                    <div className="product-card-wrap" key={name._id}>
                        <Link to={"/list/"} className="back"></Link>
                        <div className="product-card">
                            <div className="card-top">
                                <div className="top-left">
                                    <h1>{name.name}</h1>
                                    <p className="store-name">{name.company}</p>
                                    <p className="price">${name.price}</p>
                                    <p className="description">{name.about}</p>
                                </div>
                                <div className="top-right">
                                    <div id="product-images">
                                        <img src={name.picture} alt={name.name} />
                                    </div>
                                </div>
                            </div>
                            <div className="card-middle">
                                <div className="rating">
                                    <p>Rating</p>
                                    <p>{Math.round((name.rate[0] + name.rate[1] + name.rate[2] + name.rate[3] + name.rate[4])/5)}</p>
                                </div>
                                <div className="sizes">
                                    <p>Sizes</p>
                                    <input type="radio" name="size" id="small" disabled={!name.sizes.small} />
                                    <label className="size" htmlFor="small">
                                        <p>Small</p>
                                        <p>10cm x 24cm</p>
                                    </label>
                                    <input type="radio" name="size" id="medium" disabled={!name.sizes.medium} />
                                    <label className="size" htmlFor="medium">
                                        <p>Medium</p>
                                        <p>14cm x 28cm</p>
                                    </label>
                                    <input type="radio" name="size" id="large" disabled={!name.sizes.big} />
                                    <label className="size" htmlFor="large">
                                        <p>Large</p>
                                        <p>18cm x 32cm</p>
                                    </label>
                                </div>
                                <div className="add-to-cart">
                                    <div className="quantity">
                                        <span onClick={this.onDecrease}></span>
                                        <span>{this.state.item}</span>
                                        <span onClick={this.onIncrease}></span>
                                    </div>
                                    <a href="" className="add-button">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default ProductCard;