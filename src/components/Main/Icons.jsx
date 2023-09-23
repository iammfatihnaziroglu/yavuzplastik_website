import React from "react";
import "../CompCss.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGlobeEurope } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaPercentage } from "react-icons/fa";
import { Fade } from "react-reveal";
import useWindowSize from "../../utit/useWindowSize";

const Icons = ({ isAppear }) => {
  const { width } = useWindowSize();
  return (
    <div className="what_do_we_do_icons_wrapper">
      <div>
        <Fade when={isAppear} duration={1500} left>
          <AiFillStar
            style={{ color: "rgba(0, 0, 0, 0.9)" }}
            size={width <= 768 ? 35 : 56}
          />
          <h3 className="what_do_we_do_icons_margin_0">35 +</h3>
          <h5 className="what_do_we_do_icons_margin_0 what_do_we_do_icons_margin_letter_spacing">
            Yıllık Üretim Tecrübesi
          </h5>
        </Fade>
      </div>
      <div>
        <Fade when={isAppear} duration={1500} bottom>
          <BsFillPersonFill
            style={{ color: "rgba(0, 0, 0, 0.9)" }}
            size={width <= 768 ? 35 : 56}
          />
          <h3 className="what_do_we_do_icons_margin_0">50 +</h3>
          <h5 className="what_do_we_do_icons_margin_0 what_do_we_do_icons_margin_letter_spacing">
            Personel
          </h5>
        </Fade>
      </div>
      <div>
        <Fade when={isAppear} duration={1500} bottom>
          <FaPercentage
            style={{ color: "rgba(0, 0, 0, 0.9)" }}
            size={width <= 768 ? 35 : 56}
          />
          <h3 className="what_do_we_do_icons_margin_0">50 +</h3>
          <h5 className="what_do_we_do_icons_margin_0 what_do_we_do_icons_margin_letter_spacing">
            İhracat Oranı
          </h5>
        </Fade>
      </div>
      <div>
        <Fade when={isAppear} duration={1500} right>
          <FaGlobeEurope
            style={{ color: "rgba(0, 0, 0, 0.9)" }}
            size={width <= 768 ? 35 : 56}
          />
          <h3 className="what_do_we_do_icons_margin_0">15 +</h3>
          <h5 className="what_do_we_do_icons_margin_0 what_do_we_do_icons_margin_letter_spacing">
            Ülkeye İhracat
          </h5>
        </Fade>
      </div>
    </div>
  );
};

export default Icons;
