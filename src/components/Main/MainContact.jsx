import React from "react";

import "../CompCss.css";
import { AiOutlineCopyright } from "react-icons/ai";
import ContactForm from "../Form/ContactForm";
import { Fade } from "react-reveal";
import useWindowSize from "../../utit/useWindowSize";
const MainContact = ({ isAppear }) => {
  const formSubmit = (e) => {
    e.preventDefault();
  };
  const { width } = useWindowSize();
  return (
    <div className="main_contact_container">
      <div>
        <div>
          <ContactForm
            fromMainContact
            isAppear={isAppear}
            onSubmit={formSubmit}
          />
        </div>
        {width <= 768 ? null : (
          <Fade when={isAppear} duration={1453} bottom>
            <h3 style={{ letterSpacing: ".3rem" }}>
              Arz Teknoloji{" "}
              <AiOutlineCopyright
                size={width >= 768 ? 27 : 21}
                className="main_contact_copright"
              />{" "}
              Tüm Hakları Saklıdır.
            </h3>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default MainContact;
