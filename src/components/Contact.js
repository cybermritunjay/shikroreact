import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
               <section className="breadcrumb breadcrumb_bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb_iner text-center">
            <div className="breadcrumb_iner_item">
              <h2>contact us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="contact-section section_padding">
    <div className="container">
      


      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="col-lg-8">
          <form className="form-contact contact_form"  method="post" id="contactForm">
            <div className="row">
              <div className="col-12">
                <div className="form-group">

                  <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9"
                    onFocus={() => this.placeholder = ''} onBlur={() => this.placeholder = 'Enter Message'}
                    placeholder='Enter Message'></textarea>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="name" id="name" type="text" onFocus={() => this.placeholder = ''}
                    onBlur={() => this.placeholder = 'Enter your name'} placeholder='Enter your name'/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="email" id="email" type="email" onFocus={() => this.placeholder = ''}
                    onBlur={() => this.placeholder = 'Enter email address'} placeholder='Enter email address'/>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input className="form-control" name="subject" id="subject" type="text" onFocus={() => this.placeholder = ''}
                    onBlur={() => this.placeholder = 'Enter Subject'} placeholder='Enter Subject'/>
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="button button-contactForm btn_4">Send Message</button>
            </div>
          </form>
        </div>
        <div className="col-lg-4">
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-home"></i></span>
            <div className="media-body">
              <h3>Anand Mishra,Brand Owner
                .</h3>
              <p> 34 , SIDDH NAGAR </p>
              <p>INFRONT OF M-191 VEENA NAGAR INDORE (M.P) 452001</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
            <div className="media-body">
              <h3>9589935450</h3>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-email"></i></span>
            <div className="media-body">
              <h3>support@shikro.in</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
            </div>
        );
    }
}

export default Contact;