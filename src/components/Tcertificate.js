import React, { Component } from 'react';

class Tcertificate extends Component {
    render() {
        return (
            <div>
                <section className="cta_part">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="cta_part_iner">
                                    <div className="cta_part_text">
                                        <h1>Certificate</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service_part section_bg_2 section_padding">
                    <div className="container">
                        <div className="row">
                            <img src={require("../assets/img/shikro.png")} alt="shikro " style={{"width":"100%"}} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Tcertificate;