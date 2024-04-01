import React from 'react';
import './contact.css';
import emailjs from 'emailjs-com';


function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_fwvi05a', 'template_t3mz2hl', e.target, 'Dci8WZ32X7GELcO8-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
  return (
    <div className="contact__section">
        <div className="contact__content">
            <div className="contact__left"></div>
            <div className="contact__right">
                <div className="cright__content">
                    <div className="contact__title">Contact us</div>
                    <p>Get in touch with our team today to discuss your requirements and discover how Deon J GLOBAL Resources Ltd can fulfill your needs with excellence and reliability.</p>
                    <div className="contact__form">
                        <form method="POST" onSubmit={sendEmail} className='form'>
                            <div className="form__input">
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text" id='fullname' name='fullname' placeholder='Enter your full name'  required/>
                            </div>
                            <div className="form__input">
                                <label htmlFor="company">Your Company Name</label>
                                <input type="text" id='company' name='company' placeholder='Enter your company name'  required/>
                            </div>
                            <div className="form__input">
                                <label htmlFor="phone">Your Phone Number</label>
                                <input type="tel" id='phone' name='phone' placeholder='Enter your phone number'  required/>
                            </div>
                            <div className="form__input">
                                <label htmlFor="email">Your Email Address</label>
                                <input type="email" id='email' name='email' placeholder='Enter your email address'  required/>
                            </div>
                            <div className="form__input">
                                <label htmlFor="message">Leave a Message</label>
                                <textarea type="message" id='message' name='message' placeholder='Leave us a message'  required/>
                            </div>
                            <button type="submit">Submit Form</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact