import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carrousel.css';

const images = [
    require('../../../assets/productosImg/colgante.png'),
    //require('../../../assets/productosImg/macetas.png'),
    require('../../../assets/productosImg/mesaratona.png'),
    require('../../../assets/productosImg/pc.png'),
    require('../../../assets/productosImg/silla.png'),
    require('../../../assets/productosImg/sillas.png'),
    
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;