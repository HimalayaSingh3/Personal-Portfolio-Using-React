import React from 'react'
import ai from './certificates/ai.png'
import css from './certificates/css.png'
import web from './certificates/web.png'
import git from './certificates/git.png'
import react from './certificates/react.png'
import python from './certificates/python.jpg'
import postman from './certificates/postman.png'
import tcs from './certificates/tcs.png'
import se from './certificates/se.jpeg'
import gen from './certificates/gen.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Certificates.css'


const Certificates = () => {
   
  return (
    <div className="certificate">
        <div className="cert"
        data-aos="fade-up">
           <h3>SOFTWARE ENGINEERING</h3>
            <img src={se}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
           <h3>TCS ION</h3>
            <img src={tcs}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
           <h3>API BOOTCAMP</h3>
            <img src={postman}/>
        </div>
       <div className="cert"
       data-aos="fade-up">
           <h3>GENERATIVE AI STUDIO</h3>
            <img src={ai}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
            <h3>INFOSYS CSS3</h3>
            <img src={css}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
            <h3>WEB DEVELOPMENT</h3>
            <img src={web}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
            <h3>GUVI GENERATIVE AI</h3>
            <img src={gen}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
            <h3>REACT AND REDUX</h3>
            <img src={react}/>
        </div>
        <div className="cert"
        data-aos="fade-up">
            <h3>GIT & GITHUB</h3>
            <img src={git}/>
        </div>
        <div className="cert" id="python"
        data-aos="fade-up">
            <h3>PYTHON</h3>
            <img src={python}/>
        </div>
    </div>
  )
}

export default Certificates
