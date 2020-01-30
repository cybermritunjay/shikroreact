import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <section className="breadcrumb breadcrumb_bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner text-center">
                        <div className="breadcrumb_iner_item">
                            <h2>ABOUT US</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="about_part about_padding">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="about_img">
                        <img src={require("../assets/img/about_img_1.png")} className="img_1" alt=""/>
                        <img src={require("../assets/img/about_img_2.png")} className="img_2" alt=""/>
                        <h2>10 Years Working <br/>Experience</h2>
                    </div>
                </div>
                <div className="offset-lg-1 col-lg-4">
                    <div className="about_text">
                        <h5>About our company</h5>
                        <p> Shikro is the leading OEM for the electronic equipments in india with cutting edge
                            technology solutions for businesses .
                        </p>
                        <p> Our Goal is to provide High quality product at best rate possible across india .

                        </p>
                        <p>
                            Shikro ( Trademark no. 3994880 ) is the Registered Trademark registered under Section 23
                            (2), Rule 56 (1) .
                        </p>
                        <p>
                            We are leading Provider For ATAL Tinkering Lab Equipment including all the Packages
                            which included:
                            </p>
                            <ol>
                                <li>
                                    Package No. 1 - ATAL TINKERING LAB OF NITI AAYOG ELECTRONICS DEVELOPMENT, ROBOTICS,
                                    INTERNET OF THINGS AND SENSORS

                                </li>
                                <li>Package No.2: ATAL TINKERING LAB OF NITI AAYOG RAPID PROTOTYPING TOOL</li>
                                <li>
                                    Package No.3 ATAL TINKERING LAB OF NITI AAYOG MECHANICAL, ELECTRICAL and MEASUREMENT
                                    TOOLS

                                </li>
                                <li>Package No. 4 - Atal Tinkering Lab OF NITI AAYOG POWER SUPPLY AND ACCESSORIES AND
                                    SAFETY EQUIPMENT
                                </li>
                            </ol>
                            <p>
                            We are bounded for providing best experience to our consumers and we never compromise with
                            quality .
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="hero-app-7 custom-animation"><img src={require("../assets/img/animate_icon/icon_7.png")} alt=""/></div>
        <div className="hero-app-8 custom-animation2"><img src={require("../assets/img/animate_icon/icon_4.png")} alt=""/></div>
        <div className="hero-app-6 custom-animation3"><img src={require("../assets/img/animate_icon/icon_5.png")} alt=""/></div>
    </section>
            </div>
        );
    }
}

export default About;