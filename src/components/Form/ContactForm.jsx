import React from "react";
import "./ContactForm.css";
import { Fade } from "react-reveal";

const ContactForm = ({
  onSubmit,
  style,
  inputStyle,
  isAppear,
  fromMainContact,
}) => {
  return (
    <form
      style={style}
      onSubmit={onSubmit}
      className={`contact_form ${"main_contact_form"}`}
    >
      <Fade when={isAppear} top duration={1300}>
        <h3>Bize Ulaşın</h3>
      </Fade>
      <Fade bottom when={isAppear} duration={1453}>
        <input style={inputStyle} placeholder="Adınız" type="text" />
        <input style={inputStyle} placeholder="E-Mail" type="email" />
        <input style={inputStyle} placeholder="Telefon" type="number" />
        <textarea
          style={inputStyle}
          placeholder="Mesajınız"
          rows="4"
          cols="50"
        />
      </Fade>
      <Fade when={isAppear} bottom duration={1550}>
        <button>Gönder</button>
      </Fade>
    </form>
  );
};

export default ContactForm;
