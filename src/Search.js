import React from 'react';
import './App.css';
import './style.css';

class Search extends React.Component {
    render() {
        return (
          <React.Fragment>
              <header>
                  <div className="container">
                      <form className="search-form-wrap">
                          <input
                          className="search-form"
                          type="text"
                          placeholder="Search" />
                      </form>
                  </div>
              </header>
          </React.Fragment>
        );
    }
}

export default Search;