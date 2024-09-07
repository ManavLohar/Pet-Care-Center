import React from "react";
import style from "./Features.module.css";
import featureItemImg1 from "../assets/icon1.png";
import featureItemImg2 from "../assets/icon2.png";
import featureItemImg3 from "../assets/icon3.png";
import featureCenter from "../assets/feature_center.png";

const Features = () => {
  return (
    <div id="Features" className={style.features}>
      <div className={style.features_heading}>
        <h1>Our Features</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam itaque
          excepturi.
        </p>
      </div>
      <div className={style.features_items}>
        <div className={style.features_itemBox}>
          <div className={style.features_item}>
            <img src={featureItemImg1} alt="" />
            <h2>Natural products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sequi quasi ?
            </p>
          </div>
          <div className={style.features_item}>
            <img src={featureItemImg2} alt="" />
            <h2>Vet care</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sequi quasi ?
            </p>
          </div>
          <div className={style.features_item}>
            <img src={featureItemImg3} alt="" />
            <h2>Training</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sequi quasi ?
            </p>
          </div>
        </div>
        <img src={featureCenter} alt="" />
        <div className={style.features_itemBox}>
          <div className={style.features_item}>
            <img src={featureItemImg1} alt="" />
            <h2>Natural products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sequi quasi ?
            </p>
          </div>
          <div className={style.features_item}>
            <img src={featureItemImg2} alt="" />
            <h2>Vet care</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sequi quasi ?
            </p>
          </div>
          <div className={style.features_item}>
            <img src={featureItemImg3} alt="" />
            <h2>Training</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sequi quasi ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
