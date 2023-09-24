import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";

import "./UICss.css";

import { BiSearch } from "react-icons/bi";
import useWindowSize from "../../utit/useWindowSize";

const BioCard = ({ imageSrc }) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const [isCursorOn, setIsCursorOn] = useState(false);
  const overlayStyle = {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "15rem",
    backgroundColor: "rgba(0, 0, 0, 0)", // Adjust the opacity here (0 to 1)
  };

  const handleMouseEnter = () => {
    if (width >= 768) {
      setIsCursorOn(true);
    }
  };
  const handleMouseLeave = () => {
    setIsCursorOn(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate("/products")}
      className="bio_card_container"
      style={{
        position: "relative",
        width: width <= 768 ? "100%" : "23rem",
        transition: "all 0.5s ease",
        marginTop: width <= 768 ? "0rem" : "2.5rem",
      }}
    >
      <img className="bio_card_image" src={imageSrc} alt="bio_image" />
      {isCursorOn && (
        <Fade>
          <div className="bio_card" style={overlayStyle}>
            <BiSearch size={45} color="white" />
          </div>
        </Fade>
      )}
    </div>
  );
};

export default BioCard;
