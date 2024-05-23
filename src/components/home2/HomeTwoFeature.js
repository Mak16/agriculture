import React from "react";
import HomeTwoFeature1 from "../../assets/images/icon/satisfaction-guarantee.png";
import HomeTwoFeature2 from "../../assets/images/icon/professional-team.png";
import HomeTwoFeature3 from "../../assets/images/icon/material-instrument.png";
import HomeTwoFeature4 from "../../assets/images/icon/experience.png";

const HomeTwoFeature = () => {
  return (
    <>
      <div className="features-area bg-white pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-feature text-center box-shadow-3">
                <div className="single-feature-icon">
                  <img src={HomeTwoFeature1} alt="" />
                </div>
                <h5>Satisfaction garantie</h5>
                <p>
                  Il existe de nombreuses variantes de passages, dont la plupart
                  ont subi des altérations sous une forme ou une autre, par
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-feature text-center box-shadow-3">
                <div className="single-feature-icon">
                  <img src={HomeTwoFeature2} alt="" />
                </div>
                <h5>Equipe professionelle</h5>
                <p>
                  Il existe de nombreuses variantes de passages, dont la plupart
                  ont subi des altérations sous une forme ou une autre, par
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-feature text-center box-shadow-3">
                <div className="single-feature-icon">
                  <img src={HomeTwoFeature3} alt="" />
                </div>
                <h5>Instrument matériel</h5>
                <p>
                  Il existe de nombreuses variantes de passages, dont la plupart
                  ont subi des altérations sous une forme ou une autre, par
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-feature text-center box-shadow-3">
                <div className="single-feature-icon">
                  <img src={HomeTwoFeature4} alt="" />
                </div>
                <h5>Experimentés</h5>
                <p>
                  Il existe de nombreuses variantes de passages, dont la plupart
                  ont subi des altérations sous une forme ou une autre, par
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTwoFeature;
