import React, { Component } from "react";
import {Link} from "react-router-dom"

class Navbar extends Component {
  state = {
    topicsMenuHidden: true
    
  }
    render() {
      return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link to="/" className="navbar-brand text-light">{"<Northcoders News/>"}</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/articles" className="nav-link">Articles</Link>
              </li>
              <li className="nav-item">
                <Link to="/topics" className="nav-link">Topics</Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link">Users</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">{"<"}</a>
                </li>
              <li className="nav-item">
                <a className="nav-link">{"/>"}</a>
                </li>
            </ul>
          </div>
        </nav>
      );
    }
    getExtraMenuItems = (params) => {

    }
  }

export default Navbar;