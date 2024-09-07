import React from 'react'
import style from './Footer.module.scss';
import rightImg from '../assets/dog.png'

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.footerBox}>
            <div className={style.footer_left}>
                <div className={style.left_content}>
                    <h2>About Us</h2>
                    <p>The KrystalKlean is built for Industrial Cleaning Companies but is suitable for all that provide cleaning services. Novice or experienced with WordPress</p>
                </div>
                <div className={style.left_content}>
                    <h2>Newsletter</h2>
                    <input type="email" placeholder='Enter Your Email' />
                    <button>SUBMIT</button>
                </div>
                <div className={style.left_content}>
                    <h2>Buy Now</h2>
                    <button>Buy Now</button>
                </div>
                <div className={style.left_content}>
                    <h2>Recent Posts</h2>
                    <p>Lorem ipsum dolor sit</p>
                    <p>Lorem ipsum dolor sit</p>
                    <p>Lorem ipsum dolor sit</p>
                </div>
            </div>
            <div className={style.footer_right}>
                <img src={rightImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer