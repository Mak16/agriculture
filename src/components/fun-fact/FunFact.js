import React from "react";
import CountUp from "react-countup";

const FunFact = () => {
  return (
    <div className="fun-fact-area pt-60 pb-60 theme-bg-1">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3">
            <div className="single-counter text-center">
              <h2>
                <span className="counter">
                  <CountUp end={5} />
                </span>
                K+
              </h2>
              <p>Projets achevés</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3">
            <div className="single-counter text-center">
              <h2>
                <span className="counter">
                  <CountUp end={25} />
                </span>
                +
              </h2>
              <p>Récompenses</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3">
            <div className="single-counter text-center">
              <h2>
                <span className="counter">
                  <CountUp end={150} />
                </span>
                +
              </h2>
              <p>Produits Agricoles</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3">
            <div className="single-counter text-center">
              <h2>
                <span className="counter">
                  <CountUp end={100} />
                </span>
                %
              </h2>
              <p>La satisfaction du client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
