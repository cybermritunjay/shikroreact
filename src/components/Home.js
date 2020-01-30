import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
            <section className="banner_part">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-md-6">
                            <div className="banner_text">
                                <div className="banner_text_iner text-center">
                                    <h2>SHIKRO <span></span> </h2>
                                    <h4>OEM SOLUTIONS FOR ATAL LAB</h4>
                                    <h5>PACKAGE 1,2,3,4</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="banner_bg">
                                <img src={require("../assets/img/banner_img.png")} alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-app-1 custom-animation">
                    <img src={require("../assets/img/animate_icon/icon_1.png")} alt="" />
                </div>
                <div className="hero-app-5 custom-animation2">
                    <img src={require("../assets/img/animate_icon/icon_3.png")} alt="" />
                </div>
                <div className="hero-app-7 custom-animation3">
                    <img src={require("../assets/img/animate_icon/icon_2.png")} alt="" />
                </div>
                <div className="hero-app-8 custom-animation">
                    <img src={require("../assets/img/animate_icon/icon_4.png")} alt="" />
                </div>
            </section>
            <section className="cta_part">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="cta_part_iner">
                                <div className="cta_part_text">
                                    <p> Our Features</p>
                                    <h1>Building brands with purpose</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_part">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-12 " style={{"textAlign": "center"}}>
                            <img src={require("../assets/img/Package1.png")} className="img_1" alt="" />
                        </div>
                        <div className="col-lg-12 " style={{"textAlign": "center"}}>
                            <img src={require("../assets/img/Package2.png")} className="img_1" alt="" />
                        </div>
                        <div className="col-lg-12 " style={{"textAlign": "center"}}>
                            <img src={require("../assets/img/Package3.png")} className="img_1" alt="" />
                        </div>
                        <div className="col-lg-12 " style={{"textAlign": "center"}}>
                            <img src={require("../assets/img/Package4.png")} className="img_1" alt="" />
                        </div>
                    </div>
                </div>
                <div className="hero-app-7 custom-animation">
                    <img src={require("../assets/img/animate_icon/icon_7.png")} alt="" />
                </div>
                <div className="hero-app-8 custom-animation2">
                    <img src={require("../assets/img/animate_icon/icon_4.png")} alt="" />
                </div>
                <div className="hero-app-6 custom-animation3">
                    <img src={require("../assets/img/animate_icon/icon_5.png")} alt="" />
                </div>
            </section>
            </div>
        );
    }
}

export default Home;