import React from "react";
import style from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div className={style.contact}>
      <form action="submit" className={style.contactBox}>
        <h2>Get a quote for pet boarding</h2>
        <div className={style.inputArea}>
          <input type="text" placeholder="Enter Name" />
          <input type="text" placeholder="Enter Subject" />
          <input type="number" placeholder="Enter Number" />
          <input type="email" placeholder="Enter Email" />
          <textarea
            name="message"
            cols="30"
            placeholder="Enter Message"
          ></textarea>
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
