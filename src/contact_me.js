import React, { useRef } from 'react';
import './css/contact_me.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ContactMe extends React.Component {
    constructor() {
        super();
        this.form = React.createRef();
    }

    sendEmail = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm('service_9o1zwyv', 'template_hbssi9e', this.form.current, 'PJQEbBoWThyF3IEgB');
            console.log('Email sent successfully');
            toast.success('Message sent successfully!');
            e.target.reset();
        } catch (error) {
            console.error('Email failed to send:', error);
            toast.error('Failed to send message. Please try again later.');
        }
    };

    render() {
        return (
            <section id="contact">
                <h2>Get In Touch</h2>
                <h1>Contact Me</h1>

                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdOutlineEmail className="contact__option-icon" />
                            <h2>Email</h2>
                            <h3>gauravjadhao11@gmail.com</h3>
                            <a className="btn" href="https://mail.google.com/mail/?view=cm&source=mailto&to=gauravjadhao11@gmail.com" target="_blank">Send Email</a>
                        </article>
                        <article className="contact__option">
                            <BsLinkedin className="contact__option-icon" />
                            <h2>LinkedIn</h2>
                            <h3>gj28</h3>
                            <a className="btn" href="https://www.linkedin.com/in/gj28/" target="_blank">Connect With Me</a>
                        </article>
                        <article className="contact__option">
                            <BsWhatsapp className="contact__option-icon" />
                            <h2>Whatsapp</h2>
                            <h3>+91-8087997200</h3>
                            <a className="btn" href="https://api.whatsapp.com/send?phone=918087997200" target="_blank">Send Message</a>
                        </article>
                    </div>
                    <form ref={this.form} onSubmit={this.sendEmail}>
                        <input type="text" placeholder="Your Name" name="to_name" required />
                        <input type="email" placeholder="Your Email" name="from_name" required />
                        <textarea placeholder="Message" name="message" rows="7" required />
                        <input className="btn" type="submit" value="Send Message" />
                    </form>
                </div>
                <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />
            </section>
        );
    }
}

export default ContactMe;