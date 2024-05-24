import React from "react";
import QueryFormStyleOneImg1 from "../../assets/images/mission-3.jpg";

const QueryFormStyleOne = () => {
  return (
    <>
      <div
        className="bg-property pt-110 pb-110"
        data-overlay="theme-1"
        data-opacity="7"
        style={{ backgroundImage: `url(${QueryFormStyleOneImg1})` }}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="section-title quote-title mb-40">
                <h2>Obtenez un devis de nos experts</h2>
                <p>
                  Nos experts prêts à vous servir pour tout type de question.
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="quote-area-form ml-110 mr-110">
                <h3>Besoin De Faire Une Enquête ?</h3>
                <form action="/">
                  <div className="row">
                    <div className="col-xl-6">
                      <input type="text" placeholder="Prénom" />
                    </div>
                    <div className="col-xl-6">
                      <input type="text" placeholder="Email" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <input type="text" placeholder="Phone" />
                      <textarea placeholder="Ecrire Un Message Ici ..."></textarea>
                      <button className="l-btn">Envoyez Votre Enquête</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryFormStyleOne;
