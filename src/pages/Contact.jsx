import React from "react";

import "./Pages.css";
import ContactForm from "../components/Form/ContactForm";

import {
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
  BsTelephoneFill,
} from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import ReactWhatsapp from "react-whatsapp";
import { motion, useIsPresent } from "framer-motion";
import useWindowSize from "../utit/useWindowSize";

const Contact = () => {
  const { width } = useWindowSize();
  const isPresent = useIsPresent();
  const Whatsapp = ({ onClick }) => {
    return <BsWhatsapp size={65} onClick={onClick} className="contact_icon" />;
  };
  return (
    <motion.div
      /*      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 1 }} */
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: 1,
        transition: { duration: 0.5, ease: "circOut" },
      }}
      /* exit={{ scaleX: 0, transition: { duration: 0.5, ease: "circIn" } }} */
      style={{ originX: isPresent ? 0 : 1 }}
      className="contact_wrapper"
    >
      <div>
        <iframe
          title="map"
          className="contact_iframe"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3153.765877025749!2d30.56178617646727!3d37.772087512313746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQ2JzE5LjUiTiAzMMKwMzMnNTEuNyJF!5e0!3m2!1str!2str!4v1696084891713!5m2!1str!2str">
          <a href="https://www.maps.ie/distance-area-calculator.html">
            area maps
          </a>
        </iframe>
        <div className="contact_form_wrapper">
          <ContactForm
            inputStyle={width <= 768 ? { width: "21rem" } : { width: "35rem" }}
            style={{ marginTop: "0rem" }}
          />
          <div className="contact_icons_wrapper">
            <BsTelephoneFill
              size={65}
              onClick={() => window.open("tel:+905010701210")}
              className="contact_icon"
            />
            <BsFacebook
              size={65}
              onClick={() => window.open("https://www.facebook.com/")}
              className="contact_icon contact_icon_middle"
            />
            <BsInstagram
              size={65}
              onClick={() => window.open("https://www.instagram.com/")}
              className="contact_icon contact_icon_middle"
            />
            <ReactWhatsapp
              
              number="+905010701210"
              element={Whatsapp}
            />
          </div>
          {width >= 768 && <CopyRight />}
        </div>
      </div>
      {width <= 768 && <CopyRight />}
    </motion.div>
  );
};

const CopyRight = () => {
  const { width } = useWindowSize();
  return (
    <h3 className="contact_copyright">
      Arz Teknoloji
      <AiOutlineCopyright
        size={width <= 768 ? 19 : 27}
        className="contact_copyright_logo"
      />
      Tüm Hakları Saklıdır.
    </h3>
  );
};

export default Contact;
