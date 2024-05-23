import React from "react";
import { Link } from "react-router-dom";

const CtaOne = () => {
  return (
    <>
      <div className="cta-area theme-bg-1 pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta-style-1-wrapper text-center">
                <span>Shamba Agriculture</span>
                <h2>
                  Nous investissons notre travail acharné pour des personnes
                  comme vous qui <br />
                  insistent sur une grande expérience utilisateur.
                </h2>
                <p>Appelez nous au +243825505783</p>
                <Link to="/" className="l-btn">
                  Plus de Projets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaOne;
