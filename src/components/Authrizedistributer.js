import React, { Component } from 'react';

class Authrizedistributer extends Component {
    render() {
        return (
            <div>
                <section className="breadcrumb breadcrumb_bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner text-center">
                        <div className="breadcrumb_iner_item">
                            <h2>Authorized Distributor</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="about_part about_padding">
        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-2"></div>

                <div className="col-md-4">
                    <b> Easy Business Solution</b>
                    <br />
                    
                   Firm Owner : Ashish Kumar Gupta
                    <br />
                    GSTIN :: 23ASZPG9114E1ZM
                    <br />

                    Address :: 169, Sundar Nagar Main , Heera Nagar Thana
                    <br />

                    Indore , 452010
                    <br />

                    Contact :: 9617787013
                    <br />

                </div>
                <div className="col-md-6">
                    <button>Download</button>
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

export default Authrizedistributer;