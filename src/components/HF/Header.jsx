import React from "react";
import Nav from "./Nav"; 
import logo from "../../public/images/logoo.svg";

const Header = () => {
  return (
    <div className={"header_wrapper"}>
      <img src={logo} alt="logo" />
      <div>
        <Nav /> 
      </div>
    </div>
  );
};

export default Header;
