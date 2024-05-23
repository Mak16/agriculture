import React from "react";
import { v4 as uuidv4 } from "uuid";
import Icon_Estimates from "../../assets/images/why-choose-us/estimates.png";
import Icon_Equipment from "../../assets/images/why-choose-us/equipment.png";
import Icon_Work from "../../assets/images/why-choose-us/work.png";
import Icon_Irreigation from "../../assets/images/why-choose-us/irreigation.png";

const WhyChooseUsTwoData = [
  {
    id: uuidv4(),
    img: Icon_Estimates,
    heading: "Produits Bio",
    description:
      "Il existe de nombreuses variantes de passages, la majorité ayant subi des modifications.",
    imgAlt: "Free Estimates Icon",
  },

  {
    id: uuidv4(),
    img: Icon_Equipment,
    heading: "Conservation",
    description:
      "Il existe de nombreuses variantes de passages, la majorité ayant subi des modifications.",
    imgAlt: "Modern Equipment Icon",
  },

  {
    id: uuidv4(),
    heading: "Produits De Qualité",
    description:
      "Il existe de nombreuses variantes de passages, la majorité ayant subi des modifications.",
    img: Icon_Work,
  },

  {
    id: uuidv4(),
    img: Icon_Irreigation,
    heading: "Produits Frais",
    description:
      "Il existe de nombreuses variantes de passages, la majorité ayant subi des modifications.",
  },
];

const WhyChooseUsTwoItem = ({ heading, description, img, imgAlt }) => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6">
        <div className="single-choose-us">
          <div className="single-choose-us-content bb-1 b-color-2">
            <h3>{heading}</h3>
            <p>{description}</p>
          </div>
          <div className="single-choose-us-icon">
            <img src={img} alt={imgAlt} />
          </div>
        </div>
      </div>
    </>
  );
};

const WhyChoseUsTwo = () => {
  return (
    <>
      <div className="why-choose-us-area bg-white pt-110 pb-110">
        <div className="container">
          <div className="row position-relative">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                <span>Pourquoi nous choisir</span>
                <h2>
                  Découvrez le niveau puissance <br /> de nos services
                </h2>
              </div>
            </div>
          </div>
          <div className="row position-relative mt-40">
            {WhyChooseUsTwoData.map((data) => (
              <WhyChooseUsTwoItem
                key={data.id}
                heading={data.heading}
                description={data.description}
                img={data.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoseUsTwo;
