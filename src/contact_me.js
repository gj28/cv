import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

const ContactMe = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Let's discuss your next AI project</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
                    <a href="mailto:gauravjadhao11@gmail.com" className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
                        <AiOutlineMail size={24} />
                        <span style={{ fontFamily: 'var(--font-mono)' }}>gauravjadhao11@gmail.com</span>
                    </a>
                    
                    <a href="https://wa.me/918087997200" className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
                        <BsWhatsapp size={24} />
                        <span style={{ fontFamily: 'var(--font-mono)' }}>+91 8087997200</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;