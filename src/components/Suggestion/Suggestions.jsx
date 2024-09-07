import React from "react";
import style from "./Suggestions.module.css";
import suggestionsImg1 from "../assets/how1.png";
import suggestionsImg2 from "../assets/how2.png";

const Suggestions = () => {
  return (
    <div className={style.suggestions}>
      <div className={style.suggestions_content}>
        <img src={suggestionsImg1} alt="" />
        <div className={style.content}>
          <h2>Pet Boarding & Daycare</h2>
          <p>Upto To 50% Off</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            fugit repudiandae officiis reprehenderit, ad culpa?
          </p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className={style.suggestions_content}>
        <img src={suggestionsImg2} alt="" />
        <div className={style.content}>
          <h2>Pet Boarding & Daycare</h2>
          <p>Upto To 50% Off</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            fugit repudiandae officiis reprehenderit, ad culpa?
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
