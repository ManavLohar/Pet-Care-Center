import React from "react";
import style from "./About.module.css";
import aboutImg1 from "../assets/about_left.png";
import aboutImg2 from "../assets/about_bottom.png";

const About = () => {
  return (
    <div id="AboutUs" className={style.about}>
      <img src={aboutImg1} alt="" />
      <div className={style.aboutContent}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, ut
          aut cumque pariatur ad harum optio aspernatur in asperiores dicta,
          veritatis voluptates iste quas ipsam ipsum consectetur ipsa
          perferendis minus a eligendi? Quisquam vel laborum facere delectus
          expedita nemo voluptates odit accusantium libero suscipit laudantium
          ullam, maiores perferendis possimus officiis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, inventore earum nihil excepturi cumque, laborum iusto rerum necessitatibus non aliquam mollitia esse quas obcaecati molestiae velit odit, eaque atque animi?
        </p>
        <img src={aboutImg2} alt="" />
      </div>
    </div>
  );
};

export default About;
