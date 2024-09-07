import React from 'react'
import style from './Home.module.css';

const Home = () => {
  return (
    <div id="Home" className={style.home}>
        <div className={style.homeContent}>
            <h1>For Your Best Friend</h1>
            <h2>Pet Care Center</h2>
            <p>Grooming & Supply provides grooming services for all dog and cat breeds. We are fully committed to the health and hygiene of your furry best friends. We offer free estimates and consultations to help your pet look and feel their best!</p>
            <button>Book Now</button>
        </div>
    </div>
  )
}

export default Home