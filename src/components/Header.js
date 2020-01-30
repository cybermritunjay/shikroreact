import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header className="main_menu home_menu" id="mainMenu">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <Link className="navbar-brand" to="/">
                    <img src={require("../assets/img/logo.png")} alt="logo" />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse main-menu-item justify-content-end"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <Link className="nav-Link" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-Link" to="/certificate">
                          Trademark certificate
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-Link" to="/authrizedistributer">
                          Authorized Distributor
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-Link" to="/about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-Link" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;
