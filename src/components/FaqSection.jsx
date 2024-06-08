import React, { useState } from 'react'

function FaqSection() {
    const [isHidden,setIsHidden]=useState(true)
    const [isHidden2,setIsHidden2]=useState(true)
    const [isHidden3,setIsHidden3]=useState(true)

  return (
    <section id="faq" className="faq section">

    
    <div className="container section-title" data-aos="fade-up">
      <h2>F.A.Q</h2>
      <p>Frequently Asked Questions</p>
    </div>

    <div className="container">

      <div className="row">

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

          <div className="faq-container">

            <div className={`faq-item ${isHidden==false?"faq-active":""}`}>
              <h3 onClick={()=>setIsHidden(!isHidden)}>Non consectetur a erat nam at lectus urna duis?</h3>
              <div className="faq-content" style={{display:isHidden?"none":""}}>
                <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" onClick={()=>setIsHidden(!isHidden)}></i>
            </div>

            <div className={`faq-item ${isHidden2==false?"faq-active":""}`}>
              <h3 onClick={()=>setIsHidden2(!isHidden2)}>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h3>
              <div className="faq-content" style={{display:isHidden2?"none":""}}>
                <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" onClick={()=>setIsHidden2(!isHidden2)}></i>
            </div>

            <div className={`faq-item ${isHidden3==false?"faq-active":""}`}>
              <h3 onClick={()=>setIsHidden3(!isHidden3)}>Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
              <div className="faq-content" style={{display:isHidden3?"none":""}}>
                <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" onClick={()=>setIsHidden3(!isHidden3)}></i>
            </div>

          </div>

        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">

          <div className="faq-container">

            <div className="faq-item">
              <h3>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h3>
              <div className="faq-content">
                <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" onClick={()=>setIsHidden(!isHidden)}></i>
            </div>

            <div className="faq-item">
              <h3>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h3>
              <div className="faq-content">
                <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" onClick={()=>setIsHidden(!isHidden)}></i>
            </div>

            <div className="faq-item">
              <h3>Perspiciatis quod quo quos nulla quo illum ullam?</h3>
              <div className="faq-content">
                <p>Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" onClick={()=>setIsHidden(!isHidden)}></i>
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
  )
}

export default FaqSection