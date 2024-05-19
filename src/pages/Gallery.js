import React from "react";
import HeaderTop from "../common/header/HeaderTop";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import breadcrumbBg from "../assets/images/watermelon-551235_1920.jpg";
import ProjectStyleFour from "../components/project/ProjectStyleFour";
import CtaTwo from "../components/cta/CtaTwo";
import WhyChoseUsTwo from "../components/why-choose-us/WhyChoseUsTwo";
import Subscribe from "../components/subscribe/Subscribe";
import FooterTwo from "../common/footer/FooterTwo";

const Gallery = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="Classic Gallery"
        description="Nous sommes disponibles 24h/7 pour vous servir"
        currentPage="Gallerie produits et services"
      />
      <ProjectStyleFour />
      <CtaTwo />
      <WhyChoseUsTwo />
      <Subscribe />
      <FooterTwo />
    </>
  );
};

export default Gallery;
