import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-sm-3 col-md-3 col-xl-3">
                            <div className="single-footer-widget footer_1">
                                <Link to="/"> <img src={require("../assets/img/footer_logo.png")} alt="" /> </Link>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-2 col-xl-4">
                            <div className="single-footer-widget footer_2" style={{"paddingTop":"20px"}}>
                                <h4>Newsletter</h4>
                                <p>Stay updated with our latest Technology.</p>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-3 col-xl-4">
                            <div className="single-footer-widget footer_2">

                                <form action="#">
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder='Enter email address'
                                                onFocus={() => this.placeholder = ''}
                                                onBlur={() => this.placeholder = 'Enter email address'} />
                                            <div className="input-group-append">
                                                <button className="btn" type="button"><i className="ti-angle-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="social_icon">
                                  //  <Link to="/"> <i className="ti-facebook"></i> </Link>
                                   // <Link to="/"> <i className="ti-twitter-alt"></i> </Link>
                                    //<Link to="/"> <i className="ti-instagram"></i> </Link>
                                    //<Link to="/"> <i className="ti-skype"></i> </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright_part_text text-center">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="footer-text m-0">
                                            Copyright &copy;
                                        {" "+new Date().getFullYear()+" "}
                                    All rights reserved | This template is made with <i className="fa fa-heart"
                                                aria-hidden="true"></i> by <Link to="/" target="_blank">Shikro</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
