import React from 'react';


const Contact = () => {
    return  <section className="contact">
                <div className="contact-content">
                    <div className="contact-title">
                        <h2>Contact us</h2>
                    </div>
                    <div className="form">
                        <form action="" className="contact-form">
                            <div className="name-contact">
                                <input type="text" name="firstname" placeholder="firstname"/>
                                <input type="text" name="lastname" placeholder="lastname"/>
                            </div>
                            <input type="text" name="mail" placeholder="mail"/>
                            <textarea name="message" placeholder="message"></textarea>
                        </form>
                    </div>
                </div>
            </section>;
}

export default Contact;