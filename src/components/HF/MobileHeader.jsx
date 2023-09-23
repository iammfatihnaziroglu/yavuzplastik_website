import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import logo from "../../public/images/logoo.svg"; // Sadece kullanmak istediğiniz logo import edildi.
import Nav from "./Nav";
import { useLocation, useNavigate } from "react-router-dom";

const MobileHeader = () => {
  const navigate = useNavigate();
  const { pathname, key } = useLocation();

  const [isOpen, setOpen] = useState(false);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, key, offset]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div>
      <div className="mobile_header_container">
        <img
          onClick={() => navigate("/main")}
          src={
            isOpen
              ? logo
              : pathname === "/contact" 
              ? logo
              : pathname === "/main"
              ? logo
              : logo
          }
          alt="logo"
        />
        <div style={{ zIndex: 1000 }}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={
              isOpen
                ? "white"
                : pathname === "/products" || pathname === "/about"
                ? "black"
                : "white"
            }
          />
        </div>
      </div>

      <div
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 1s ease",
          height: pathname !== "/main" && "110vh",
        }}
        className="header_burger_nav"
      >
        <Nav />
      </div>
    </div>
  );
};

export default MobileHeader;
