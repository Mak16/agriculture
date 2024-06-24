import React from "react";
import { FaArrowRight } from "react-icons/fa";

const QuoteWidget = () => {
  return (
    <>
      <div className="widget quote-widget">
        <h3 className="widget-title">Nous Ecrire</h3>
        <input type="text" placeholder="Votre Nom" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Massage Details"></textarea>
        <button>
          ENVOYER MESSAGE <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default QuoteWidget;
