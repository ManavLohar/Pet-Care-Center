import React from "react";
import style from "./Gallery.module.css";
import galleryImg1 from "../assets/gallery1.png";
import galleryImg2 from "../assets/gallery2.png";
import galleryImg3 from "../assets/gallery3.png";
import galleryImg4 from "../assets/gallery4.png";
import galleryImg5 from "../assets/gallery5.png";
import galleryImg6 from "../assets/gallery6.png";

const Gallery = () => {
  return (
    <div id="Gallery" className={style.gallery}>
      <div className={style.gallery_heading}>
        <h1>Our Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsam!
        </p>
      </div>
      <div className={style.picturesBox}>
        <div className={style.pics}>
          <img src={galleryImg1} alt="" />
          <img src={galleryImg2} alt="" />
        </div>
        <div className={style.pics}>
          <img src={galleryImg3} alt="" />
          <img src={galleryImg4} alt="" />
        </div>
        <div className={style.pics}>
          <img src={galleryImg5} alt="" />
          <img src={galleryImg6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
