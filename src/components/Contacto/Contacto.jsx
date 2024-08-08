import React from "react";
import './Contacto.css';

const Contacto = () => {
    return (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <p className="textoContacto">Hacemos muebles a medida, podes escanear el codigo qr o clickear en la imagen para visitar el Instagram</p>
          <a 
            href="https://www.instagram.com/jp.herreriaartesanal/"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
                className="imgContacto"
              src={require('../../assets/qr.png')} 
              alt="QR Code" 
             style={{ width: "30%", height: "30%" }} />
          </a>
        </div>
      );
}
    export default Contacto;