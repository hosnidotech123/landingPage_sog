import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "../assets/img/hero-img.png";

function HeroSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            easing: 'ease-in-out', // animation easing
            once: true, // whether animation should happen only once
            mirror: false // whether elements should animate out while scrolling past them
        });
    }, []);

    return (
        <section id="hero" className="hero section">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
                        <p data-aos="fade-up" data-aos-delay="100">We are a team of talented designers making websites with Bootstrap</p>
                        <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                            <a href="#about" className="btn-get-started">Get Started <i className="bi bi-arrow-right"></i></a>
                            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                        <img src={Hero} className="img-fluid animated" alt="Hero" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
