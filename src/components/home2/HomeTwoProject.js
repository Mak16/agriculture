import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import HomeTwoProjectImg1 from "../../assets/images/project/framer.jpg";
import HomeTwoProjectImg2 from "../../assets/images/project/plantation.jpg";
import HomeTwoProjectImg3 from "../../assets/images/project/arrosage.jpg";

const HomeTwoProject = () => {
  return (
    <>
      <div className="project-area gray-bg-2 pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                <span>Nos projets</span>
                <h2>Nos projets réussis</h2>
              </div>
            </div>
          </div>
          <div className="row portfolio-active">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div
                className="single-project-isotope bg-property mb-25"
                style={{ backgroundImage: `url(${HomeTwoProjectImg1})` }}
              >
                <div className="project-isotope-content-wrapper">
                  <div className="portfolio-content">
                    <h3>Aménagement De Terrain</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                    <a href="project-details.html">
                      Voir Plus <FaLongArrowAltRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div
                className="single-project-isotope bg-property mb-25"
                style={{ backgroundImage: `url(${HomeTwoProjectImg2})` }}
              >
                <div className="project-isotope-content-wrapper">
                  <div className="portfolio-content">
                    <h3>Plantation D'arbres</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                    <a href="project-details.html">
                      Voir Plus <FaLongArrowAltRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div
                className="single-project-isotope bg-property mb-25"
                style={{ backgroundImage: `url(${HomeTwoProjectImg3})` }}
              >
                <div className="project-isotope-content-wrapper">
                  <h3>Arrosage</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                  </p>
                  <a href="project-details.html">
                    Read More <FaLongArrowAltRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTwoProject;
