import React from 'react'
import features from "../assets/img/features.png"

function FeaturesSection() {
  return (
    <section id="features" className="features section">

   
    <div className="container section-title" data-aos="fade-up">
      <h2>Features</h2>
      <p>Our Advacedd Features<br/></p>
    </div>

    <div className="container">

      <div className="row gy-5">

        <div className="col-xl-6" data-aos="zoom-out" data-aos-delay="100">
          <img src={features} className="img-fluid" alt=""/>
        </div>

        <div className="col-xl-6 d-flex">
          <div className="row align-self-center gy-4">

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-box d-flex align-items-center">
                <i className="bi bi-check"></i>
                <h3>Eos aspernatur rem</h3>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-box d-flex align-items-center">
                <i className="bi bi-check"></i>
                <h3>Facilis neque ipsa</h3>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-box d-flex align-items-center">
                <i className="bi bi-check"></i>
                <h3>Volup amet volupt</h3>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="feature-box d-flex align-items-center">
                <i className="bi bi-check"></i>
                <h3>Rerum omnis sint</h3>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="feature-box d-flex align-items-center">
                <i className="bi bi-check"></i>
                <h3>Alias possimus</h3>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="700">
              <div className="feature-box d-flex align-items-center">
                <i className="bi bi-check"></i>
                <h3>Repellendus molli</h3>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>

  </section>
  )
}

export default FeaturesSection