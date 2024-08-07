import React from "react";
import HeaderTop from "../common/header/HeaderTop";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import breadcrumbBg from "../assets/images/food_system.jpg";
// import FooterOne from "../common/footer/FooterOne";
import AboutVideoBlock from "../components/about/AboutVideoBlock";
import FunFact from "../components/fun-fact/FunFact";
import AboutExperience from "../components/about/AboutExperience";
import AboutBlock from "../components/about/AboutBlock";
import CtaTwo from "../components/cta/CtaTwo";
import AboutTeam from "../components/about/AboutTeam";
import Subscribe from "../components/subscribe/Subscribe";
import TestimonialStyleTwo from "../components/testimonial/TestimonialStyleTwo";
import HowItWorkOne from "../components/how-it-work/HowItWorkOne";
import FooterTwo from "../common/footer/FooterTwo";

export const About = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="Shamba Agriculture"
        description="Nous sommes disponibles 24/7 pour les produits agricoles & La consultance agricole"
        currentPage="Apropos"
      />
      <AboutVideoBlock />
      <FunFact />
      <AboutExperience />
      <AboutBlock />
      <CtaTwo />
      <AboutTeam />
      <HowItWorkOne />
      <TestimonialStyleTwo />
      <Subscribe />
      <FooterTwo />
    </>
  );
};

export default About;
