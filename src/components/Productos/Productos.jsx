import React from "react";
import ImageGallery from "../Galeria/ImageGallery.jsx"; 
import './Productos.css';

const Productos = () => {
  const images = [
    require('../../assets/productosImg/colgante.png'), 
    require('../../assets/productosImg/escritorio.png'),
    require('../../assets/productosImg/escritorio1.png'),
    require('../../assets/productosImg/estanteria.png'),
    require('../../assets/productosImg/hm.png'),
    // require('../../assets/productosImg/macetas.png'),
    require('../../assets/productosImg/mates.png'),
    require('../../assets/productosImg/mesaratona.png'),
    require('../../assets/productosImg/pc.png'),
    require('../../assets/productosImg/perritos.png'),
    require('../../assets/productosImg/silla.png'),
    require('../../assets/productosImg/sillas.png'),


  ];

  return (
    <>
      <h1 className="Titulo">Herreria Artesanal</h1>
      <div className="linea"></div>
      <ImageGallery images={images} />
      <div className="linea"></div>
    </>
  );
};

export default Productos;