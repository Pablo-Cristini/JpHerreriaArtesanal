import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="contact-section">
                <a href="https://www.instagram.com/tu_usuario_de_instagram" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../assets/instagram.png')} alt="Instagram logo" className="contact-icon" />
                </a>
                <div className="whatsapp-section">
                    <img src={require('../../assets/whatsappp.png')} alt="WhatsApp logo" className="contact-icon" />
                    <p>54 9 223 695-4988</p>
                </div>
                <div className="thanks-section">
                    <p>Gracias por su visita</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;