import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const ContactWidget = () => {
  return (
    <>
      <div className="widget contact-widget mb-60">
        <span>Mangez Bio!</span>
        <h3 className="widget-title">
          Produits sains pour toute votre famille!!
        </h3>
        <p>
          Les Produits que nous mettons à votre disposition sont de haute
          qualité axé sur la sécurité.
        </p>
        <Link to="tel:243825505783" className="l-contact-btn">
          <span>
            <FaWhatsapp />
          </span>{" "}
          Whatsapp
        </Link>
        {/* <h3>
          <Link to="tel:243825505783">+243 825 505 783</Link>
        </h3> */}
      </div>
    </>
  );
};

export default ContactWidget;
