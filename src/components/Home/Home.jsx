import React from 'react'
import dp from './images/pic.png'
import './Home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import cv from'./images/MyCV.pdf'


const Home = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    
    <div className="head1">
      <img src={dp} data-aos="fade-down"/>
                <h1 data-aos="fade-up">I'm <span className="name">Himalaya</span> Singh,<br></br> Software Engineer in <span class="in">In</span><span class="d">d</span><span class="ia">ia</span>.</h1>
                <p>Proficient in a variety of platforms, and languages. Driving successful project completion through expertise in frontEnd development. Committed to continuous learning and professional development to remain at the forefront of the rapidly evolving tech industry."</p>
        <a href={cv} download className="resume">Download CV</a>
    </div>
  )
}

export default Home
