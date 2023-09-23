import React from "react";
import "../CompCss.css";

import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import ReactWhatsapp from "react-whatsapp";
import { Fade } from "react-reveal";
import useWindowSize from "../../utit/useWindowSize";

const WhatDoWeDoContactIcons = ({ isAppear }) => {
  const Whatsapp = ({ onClick }) => {
    return (
      <BsWhatsapp onClick={onClick} className="what_do_we_do_contact_icon" />
    );
  };
  return (
    <div className="what_do_we_do_contact_icon_container">
      <Fade when={isAppear} left duration={1350}>
        <BsInstagram
          onClick={() => window.open("https://www.instagram.com/yavuz_plastik32/?hl=en")}
          className="what_do_we_do_contact_icon"
        />
      </Fade>
      <Fade when={isAppear} bottom duration={1350}>
        <BsFacebook
          onClick={() => window.open("https://www.facebook.com/Yavuzplastik.22/")}
          className="what_do_we_do_contact_icon"
        />
      </Fade>
      <Fade when={isAppear} right duration={1350}>
        <ReactWhatsapp number="+90 544 301 61 69" element={Whatsapp} />
      </Fade>
    </div>
  );
};

export default WhatDoWeDoContactIcons;
