import React from 'react'
import style from './WhatWeDo.module.css'
import whatwedoImg from '../assets/what_right.png'

const WhatWeDo = () => {
  return (
    <div className={style.whatWeDo}>
        <div className={style.whatWeDo_content}>
            <h1>Find Your Friend</h1>
            <h2>Adopting is an act of love</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, quae officia harum enim dolores expedita accusamus ducimus repudiandae rerum voluptatem omnis nulla repellendus? Ipsam consequatur eveniet minima aperiam similique dolore?</p>
            <button>Book Now</button>
        </div>
        <img src={whatwedoImg} alt="" />
    </div>
  )
}

export default WhatWeDo