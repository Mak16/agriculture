import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/Shamba Logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={LogoImg} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
