import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import TestimonialStyleTwoImg1 from "../../assets/images/testimonial/testimonial-1.png";

const TestimonialStyleTwo = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
  };
  return (
    <>
      <div className="testimonial-area white-bg pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                <span>Client satisfait</span>
                <h2>
                  Ce Que Nos Clients Disent <br /> De Nos Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-end">
            <div className="col-xl-6 col-lg-6">
              <div className="testimonial-img">
                <img src={TestimonialStyleTwoImg1} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="testimonial-style-2-wrapper">
                <Slider {...settings} className="testimonial-style-2">
                  <div className="single-testimonial-style-2">
                    <p>
                      lorem ipsum dolor sit amet, con con laoreet non proident
                      et non proident et euismod or just lorem ipsum dolor sit
                      amet, con con laoreet non proident et non proident et
                      euismod or just
                    </p>
                    <h4>Makeda Banza</h4>
                    <span>CEO, Black Forest</span>
                  </div>
                  <div className="single-testimonial-style-2">
                    <p>
                      lorem ipsum dolor sit amet, con con laoreet non proident
                      et non proident et euismod or just lorem ipsum dolor sit
                      amet, con con laoreet non proident et non proident et
                      euismod or just
                    </p>
                    <h4>Salva Amisi</h4>
                    <span>CEO, Najowa Garden</span>
                  </div>
                  <div className="single-testimonial-style-2">
                    <p>
                      lorem ipsum dolor sit amet, con con laoreet non proident
                      et non proident et euismod or just lorem ipsum dolor sit
                      amet, con con laoreet non proident et non proident et
                      euismod or just
                    </p>
                    <h4>Paulin Cyani</h4>
                    <span>CEO, Fast Garden</span>
                  </div>
                </Slider>
                <div className="testimonial-quote-icon">
                  <FaQuoteLeft />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialStyleTwo;
