import React from "react";

import Fade from "react-reveal/Fade";

import "../CompCss.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero__wrapper">
      <div className="hero__inner__wrapper">
        <div>
          <Fade duration={1800} right>
            <div>En İyisi İçin</div>
          </Fade>
          <Fade duration={1300} bottom>
            <h3>Yavuz Plastik</h3>
          </Fade>
          <Fade duration={1300} left>
            <h5 onClick={() => navigate("/products")}>Keşfet</h5>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;
