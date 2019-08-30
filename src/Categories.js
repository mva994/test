import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../node_modules/react-owl-carousel2/src/owl.carousel.css';
import './App.css';
import './style.css';

class Categories extends React.Component {

    render() {

        const options = {
            margin: 10
        };

        return (
            <React.Fragment>
                <footer>
                    <div className="container">
                        <div className="top-categories-wrap">
                            <div className="text-description">
                                <h2>Top categories</h2>
                                <a href="" className="see-all">See all</a>
                            </div>
                            <OwlCarousel ref="top-categories" options={options} id="top-categories">
                                <div className="top-categories-card">
                                    <div className="top-categories-card-background purple"></div>
                                    <h3 className="top-categories-name">Regular gift</h3>
                                </div>
                                <div className="top-categories-card">
                                    <div className="top-categories-card-background lightblue"></div>
                                    <h3 className="top-categories-name">Box gift</h3>
                                </div>
                                <div className="top-categories-card">
                                    <div className="top-categories-card-background rose"></div>
                                    <h3 className="top-categories-name">Chocolate</h3>
                                </div>
                                <div className="top-categories-card">
                                    <div className="top-categories-card-background violet"></div>
                                    <h3 className="top-categories-name">Gift with card</h3>
                                </div>
                                <div className="top-categories-card">
                                    <div className="top-categories-card-background purple"></div>
                                    <h3 className="top-categories-name">Regular gift</h3>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Categories;