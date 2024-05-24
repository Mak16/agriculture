import React from "react";
import { Link } from "react-router-dom";
import FooterBG from "../../assets/images/footer-1.png";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FooterTwo = () => {
  return (
    <>
      <footer
        className="footer-bg bg-property theme-bg-2"
        style={{ backgroundImage: `url(${FooterBG})` }}
      >
        <div className="footer-top position-relative pt-110 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget-1">
                  <div className="footer-title">
                    <h4>Apropos</h4>
                  </div>
                  <div className="footer-text">
                    <p>
                      Nous vous proposons des produits agricoles bio &amp; les
                      services de consultance agricole.
                    </p>
                  </div>
                  <div className="footer-info">
                    <Link to="/">
                      <FaPhoneAlt />
                      (243) 825 505 783
                    </Link>
                  </div>
                  <div className="footer-social mt-35">
                    <h5>Suivez Nous:</h5>
                    <ul>
                      <li>
                        <Link to="/">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <FaPinterestP />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                <div className="footer-widget-2">
                  <div className="footer-title">
                    <h4>Liens Rapides</h4>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link to="/">Nous Contactez Nous</Link>
                      </li>
                      <li>
                        <Link to="/">Notre Equipe</Link>
                      </li>
                      <li>
                        <Link to="/">Nos Services</Link>
                      </li>
                      {/* <li>
                        <Link to="/">Our Project</Link>
                      </li> */}
                      <li>
                        <Link to="/">Apropos</Link>
                      </li>
                      {/* <li>
                        <Link to="/">News Update</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                <div className="footer-widget-3">
                  <div className="footer-title">
                    <h4>Nos Services</h4>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link to="/">Aménagement paysager</Link>
                      </li>
                      <li>
                        <Link to="/">Culture des plantes</Link>
                      </li>
                      <li>
                        <Link to="/">Coupe de branches</Link>
                      </li>
                      <li>
                        <Link to="/">Élagage des fleurs</Link>
                      </li>
                      <li>
                        <Link to="/">Plantation d'arbres</Link>
                      </li>
                      <li>
                        <Link to="/">Enlèvement des déchets</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget-4">
                  <div className="footer-title">
                    <h4>Contact us</h4>
                  </div>
                  <div className="footer-text">
                    <p>A votre service depuis plus de 5 ans</p>
                  </div>
                  <div className="footer-contact-info pt-20">
                    <ul>
                      <li>
                        <FaPhoneAlt />
                        <Link to="/">+243 825 505 783</Link>
                      </li>
                      <li>
                        <FaEnvelope />
                        <Link to="/">makedabanza16@gmail.com</Link>
                      </li>
                      <li>
                        <FaMapMarkerAlt />
                        <span>
                          Immeuble Bambin #16, avenue Batisseurs, Goff faustin,
                          Lubumbashi, RDC.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom pt-40 pb-30 bt-1 b-color-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="copyright">
                  <p>
                    © 2024 <Link to="/">ShambaAgriculture</Link>. All right
                    reserved.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-center text-xl-end text-lg-end text-md-end">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="/">Apropos</Link>
                    </li>
                    <li>
                      <Link to="/">Nous contacter</Link>
                    </li>
                    <li>
                      <Link to="/">Nos Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
