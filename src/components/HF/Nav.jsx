import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./HF.css";
import useWindowSize from "../../utit/useWindowSize";

const Nav = () => {
  const { pathname } = useLocation();
  const { width } = useWindowSize();
  const contactStyle = {
    color: pathname === "/main" ? "white" : "#ffffffe6",
  };
  const contactActiveStyle = {
    color: pathname === "/main" ? "white" : "#ffffffe6",
  };
  return (
    <>
      <div className="nav_wrapper">
        <NavLink
          style={
            pathname === "/contact"
              ? contactStyle
              : pathname === "/main"
              ? contactActiveStyle
              : null
          }
          className={({ isActive }) =>
            isActive ? "active_nav_link nav_link" : "nav_link"
          }
          to="/main"
        >
          Anasayfa
        </NavLink>
        <NavLink
          style={
            pathname === "/contact"
              ? contactStyle
              : pathname === "/main"
              ? contactStyle
              : null
          }
          className={({ isActive }) =>
            isActive ? "active_nav_link nav_link" : "nav_link"
          }
          to="/products"
        >
          Ürünler
        </NavLink>
        <NavLink
          style={
            pathname === "/contact"
              ? contactStyle
              : pathname === "/main"
              ? contactStyle
              : null
          }
          className={({ isActive }) =>
            isActive ? "active_nav_link nav_link" : "nav_link"
          }
          to="/about"
        >
          Hakkımızda
        </NavLink>
        <NavLink
          style={
            pathname === "/contact"
              ? (contactStyle, contactActiveStyle)
              : pathname === "/main"
              ? contactStyle
              : null
          }
          className={({ isActive }) =>
            isActive ? "active_nav_link nav_link" : "nav_link"
          }
          to="/contact"
        >
          İletişim
        </NavLink>
      </div>
      {width <= 768 && (
        <h3
          className="nav_brand"
          style={{ paddingBottom: pathname === "/main" && "3rem" }}
        >
          Oruç Pen
        </h3>
      )}
    </>
  );
};

export default Nav;
