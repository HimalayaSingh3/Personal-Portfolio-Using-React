import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import './Services.css'


const Services = () => {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <div id="services">
    <div className="container">
        <div className="service-list">
            <div data-aos="flip-left">
                <h2>Web Design</h2>
                <p>We creates visually stunning and highly functional websites tailored to your specific needs. We ensure your website stands out with a unique design that reflects your brand identity and engages your audience.</p>
            </div>
            <div data-aos="flip-left">
                <h2>Seo</h2>
                <p>Our SEO and performance optimization services improve your website's visibility on search engines and enhance its loading speed. We use the latest SEO techniques to boost your rankings and implement performance optimizations to provide a fast and efficient user experience.</p>
            </div>
            <div data-aos="flip-left">
                <h2>Social Media Integration</h2>
                <p>We can seamlessly connect your site to social media channels, enabling easy sharing of content and enhancing your online presence. Our solutions include social media buttons, feeds, and login integrations.</p>
            </div>
            <div data-aos="flip-left">
                <h2>Web Development</h2>
                <p>Our development process involves understanding your goals and requirements to build a site that reflects your brand and engages your audience. From simple informational sites to complex web applications, we deliver solutions that work for you.</p>
            </div>
            <div data-aos="flip-left">
                <h2>Responsiveness</h2>
                <p>We build responsive websites that look and perform flawlessly on all devices, from desktops to smartphones. Our development process ensures your site is accessible and user-friendly, providing a seamless experience for every visitor.</p>
            </div>
            <div data-aos="flip-left">
                <h2>UI/UX Design</h2>
                <p>Our UX/UI design services focus on creating intuitive and engaging user interfaces that enhance the overall user experience. We prioritize usability and accessibility, ensuring your visitors have a positive and memorable interaction with your site.</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Services
