import React from 'react';
import Carrousel from './Carrousel/Carrousel';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="text-section">
                <h1>Juan Poli Herrería Artesanal</h1>
                <p>
                    Bienvenidos a nuestro proyecto de herrería artesanal. Nos especializamos en la creación
                    de piezas únicas y personalizadas, utilizando técnicas tradicionales y materiales de alta
                    calidad. Nuestro objetivo es mantener viva la artesanía de la herrería mientras innovamos
                    con diseños modernos y funcionales.
                </p>
            </div>
            <div className="carousel-section">
                <Carrousel />
            </div>
        </div>
    );
};

export default Home;