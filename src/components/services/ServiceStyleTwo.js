import React from "react";
import { v4 as uuidv4 } from "uuid";
import Icon_landscape from "../../assets/images/service/landscape.png";
import Icon_growing from "../../assets/images/service/growing.png";
import Icon_harvest from "../../assets/images/service/harvest.png";
import Icon_flower from "../../assets/images/service/flower.png";
import Icon_tree from "../../assets/images/service/tree.png";
import Icon_rubbish from "../../assets/images/service/rubbish.png";
import { FaAngleDoubleRight } from "react-icons/fa";

const ServiceTwoData = [
  {
    id: uuidv4(),
    heading: "Aménagement paysager",
    description:
      "Il existe de nombreuses variantes de passages, la majorité ayant subi des modifications.",
    img: Icon_landscape,
    serviceLink: "/",
  },
  {
    id: uuidv4(),
    heading: "Culture des plantes",
    description:
      "Il existe de nombreuses variantes de passages, la majorité ayant subi des modifications.",
    img: Icon_growing,
    serviceLink: "/",
  },
  {
    id: uuidv4(),
    heading: "Coupe de branches",
    description:
      "Il existe de nombreuses variantes de passages, la majorité ayant subi des modifications.",
    img: Icon_harvest,
    serviceLink: "/",
  },
  {
    id: uuidv4(),
    heading: "Élagage des fleurs",
    description:
      "Il existe de nombreuses variantes de passages, la majorité ayant subi des modifications.",
    img: Icon_flower,
    serviceLink: "/",
  },
  {
    id: uuidv4(),
    heading: "Plantation d'arbres",
    description:
      "Il existe de nombreuses variantes de passages, la majorité ayant subi des modifications.",
    img: Icon_tree,
    serviceLink: "/",
  },
  {
    id: uuidv4(),
    heading: "Enlèvement des déchets",
    description:
      "Il existe de nombreuses variantes de passages, la majorité ayant subi des modifications.",
    img: Icon_rubbish,
    serviceLink: "/",
  },
];

const ServiceTwoItem = ({ img, heading, description, serviceLink }) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="single-service text-center">
          <div className="service-icon ml-5">
            <img src={img} alt="Service Icon" />
          </div>
          <h3>{heading}</h3>
          <p>{description}</p>
          <a href={serviceLink}>
            Voir Plus
            <span className="service-readmore-icon">
              <FaAngleDoubleRight />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

const ServiceStyleTwo = () => {
  return (
    <>
      <div className="service-area theme-bg-4 pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                <span>Nos services</span>
                <h2>
                  Pourquoi choisirez-vous nos <br /> services?
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {ServiceTwoData.map((data) => (
              <ServiceTwoItem
                key={data.id}
                img={data.img}
                heading={data.heading}
                description={data.description}
                serviceLink={data.serviceLink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceStyleTwo;
