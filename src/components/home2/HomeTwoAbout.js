import React from "react";
import HomeTwoAboutImg1 from "../../assets/images/about/agriculture_4.jpg";

const HomeTwoAbout = () => {
  return (
    <>
      <div className="about-area gray-bg-2 pt-110 pb-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="about-img-style-1">
                <img src={HomeTwoAboutImg1} alt="" />
                <div className="about-award">
                  <h3>A votre service depuis 5 ans</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="about-text-wrapper pt-30">
                <div className="section-title mb-40">
                  <span>Nous nous engageons à vous servir</span>
                  <h2 className="mb-30">
                    20 ans de recherche sur la façon de développer les systèmes
                    agricoles et d'offrir une alimentation saine
                  </h2>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet.
                    <br />
                    <br /> Combined with a handful of model sentence structures,
                    Lorem Ipsum The generated Lorem Ipsum is therefore always
                    free from repetition, injected humour,{" "}
                  </p>
                </div>
                <a href="/" className="l-btn">
                  Rendez-vous
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTwoAbout;
