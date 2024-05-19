import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FaLink, FaSearchPlus } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import ProjectStyleFourImg1 from "../../assets/images/project/tomates.jpg";
import ProjectStyleFourImg2 from "../../assets/images/project/vegetables.jpg";
import ProjectStyleFourImg3 from "../../assets/images/project/piment.jpg";
import ProjectStyleFourImg4 from "../../assets/images/project/potatoes.jpg";
import ProjectStyleFourImg5 from "../../assets/images/project/poultry-farming.jpg";
import ProjectStyleFourImg6 from "../../assets/images/project/poules.jpg";
import ProjectStyleFourImg7 from "../../assets/images/project/porcs.jpg";
import ProjectStyleFourImg8 from "../../assets/images/project/fish.jpg";
import ProjectStyleFourImg9 from "../../assets/images/project/legumes.jpg";
import ProjectStyleFourImg10 from "../../assets/images/project/chou.jpg";
import ProjectStyleFourImg11 from "../../assets/images/project/p2.jpg";
import ProjectStyleFourImg12 from "../../assets/images/project/p3.jpg";

const ProjectStyleFourData = [
  {
    id: uuidv4(),
    img: ProjectStyleFourImg1,
    heading: "Tomates Fraiches",
    btnLink: "/project-details",
    category: "planting",
    imgPopup: ProjectStyleFourImg1,
  },

  {
    id: uuidv4(),
    img: ProjectStyleFourImg2,
    heading: "Carottes & concombres",
    btnLink: "/project-details",
    category: "planting",
    imgPopup: ProjectStyleFourImg2,
  },

  {
    id: uuidv4(),
    img: ProjectStyleFourImg3,
    heading: "Piments verts",
    btnLink: "/project-details",
    category: "video",
    imgPopup: ProjectStyleFourImg3,
  },

  {
    id: uuidv4(),
    img: ProjectStyleFourImg4,
    heading: "Patates",
    btnLink: "/project-details",
    category: "planting",
    imgPopup: ProjectStyleFourImg4,
  },

  {
    id: uuidv4(),
    img: ProjectStyleFourImg5,
    heading: "Poules",
    btnLink: "/project-details",
    category: "volaille",
    imgPopup: ProjectStyleFourImg5,
  },

  {
    id: uuidv4(),
    img: ProjectStyleFourImg6,
    heading: "Poules",
    btnLink: "/project-details",
    category: "volaille",
    imgPopup: ProjectStyleFourImg6,
  },

  {
    id: uuidv4(),
    img: ProjectStyleFourImg7,
    heading: "Porcs",
    btnLink: "/project-details",
    category: "video",
    imgPopup: ProjectStyleFourImg7,
  },

  {
    id: uuidv4(),
    img: ProjectStyleFourImg8,
    heading: "Possons Frais",
    btnLink: "/project-details",
    category: "garden",
    imgPopup: ProjectStyleFourImg8,
  },

  {
    id: uuidv4(),
    img: ProjectStyleFourImg9,
    heading: "Legumes",
    btnLink: "/project-details",
    category: "garden",
    imgPopup: ProjectStyleFourImg9,
  },

  {
    id: uuidv4(),
    img: ProjectStyleFourImg10,
    heading: "Chou",
    btnLink: "/project-details",
    category: "garden",
    imgPopup: ProjectStyleFourImg10,
  },

  {
    id: uuidv4(),
    img: ProjectStyleFourImg11,
    heading: "Cutting",
    btnLink: "/project-details",
    category: "garden",
    imgPopup: ProjectStyleFourImg11,
  },

  {
    id: uuidv4(),
    img: ProjectStyleFourImg12,
    heading: "Commercial Gardening",
    btnLink: "/project-details",
    category: "garden",
    imgPopup: ProjectStyleFourImg12,
  },
];

const ProjectStyleFourItem = ({ img, imgPopup, heading, btnLink }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-4 planting">
        <div
          className="single-project-isotope-style-2 bg-property mb-25"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="portfolio-content-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="popup-image"
            >
              <FaSearchPlus />
            </button>
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={[{ src: imgPopup }]}
            />
            <Link to={btnLink}>
              <FaLink />
            </Link>
          </div>
          <div className="portfolio-heading-content-2">
            <h3>{heading}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

const CategoryBtn = ({ name, handleSetCategory, label, className }) => {
  return (
    <>
      <button
        className={className}
        type="button"
        onClick={() => handleSetCategory(name)}
      >
        {label}
      </button>
    </>
  );
};

const ProjectStyleFour = () => {
  // STATES
  const [category, setCategory] = useState("all");
  const [projectStyleFourItem, setProjectStyleFourItem] = useState([]);

  useEffect(() => {
    category === "all"
      ? setProjectStyleFourItem(ProjectStyleFourData)
      : setProjectStyleFourItem(
          ProjectStyleFourData.filter((data) => data.category === category)
        );
  }, [category]);

  return (
    <>
      <div className="project-area pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                <span>Nos Produits & Services</span>
                <h2>Produits & Services Agricoles</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="portfolio-menu mb-60">
                <CategoryBtn
                  className={category === "all" ? "active" : null}
                  name="all"
                  label="Tous"
                  handleSetCategory={setCategory}
                />
                <CategoryBtn
                  className={category === "volaille" ? "active" : null}
                  name="volaille"
                  label="Volailles"
                  handleSetCategory={setCategory}
                />
                <CategoryBtn
                  className={category === "video" ? "active" : null}
                  name="video"
                  label="Video Gallery"
                  handleSetCategory={setCategory}
                />
                <CategoryBtn
                  className={category === "garden" ? "active" : null}
                  name="garden"
                  label="Garden Care"
                  handleSetCategory={setCategory}
                />
                <CategoryBtn
                  className={category === "planting" ? "active" : null}
                  name="planting"
                  label="Planting"
                  handleSetCategory={setCategory}
                />
                <CategoryBtn
                  className={category === "snow" ? "active" : null}
                  name="snow"
                  label="Snow Removal"
                  handleSetCategory={setCategory}
                />
              </div>
            </div>
          </div>
          <div className="row portfolio-active">
            {projectStyleFourItem.map(
              (item, length) =>
                length <= "12" && (
                  <ProjectStyleFourItem
                    key={item.id}
                    img={item.img}
                    imgPopup={item.imgPopup}
                    heading={item.heading}
                    category={item.category}
                    btnLink={item.btnLink}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectStyleFour;
