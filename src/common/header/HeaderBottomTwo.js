import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import PhoneImgIcon from "../../assets/images/icon/phone.png";

const HeaderBottomTwo = () => {
  return (
    <div id="" className="fixed-top cs_hd_style">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <Logo />
          </div>
          <div className="col-xl-10 col-lg-10 col-md-6">
            <div className="header-call-btn f-right">
              <Link to="/">
                <img src={PhoneImgIcon} alt="Phone Icon" />
                +243 825505783
              </Link>
            </div>
            <Nav />
          </div>
          <div className="col-12">
            <div className="mobile-menu">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottomTwo;
