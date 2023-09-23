import React from "react";

import BG8 from "../../public/images/bg-8.jpg";

import Icons from "./Icons";
import "../CompCss.css";
import WhatDoWeDoContactIcons from "./WhatDoWeDoContactIcons";
import { Fade } from "react-reveal";
const WhatDoWeDo = ({ isAppear }) => {
  return (
    <div className="what_do_we_do_container">
      <Fade when={isAppear} left duration={1450}>
        <img src={BG8} alt="background" />
      </Fade>
      <div className="what_do_we_do_wrapper">
        <div className="what_do_we_do_text_wrapper">
          <Fade when={isAppear} top duration={1450}>
            <h2>Neler Yapıyoruz?</h2>
          </Fade>
          <Fade when={isAppear} right duration={1500}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              minima rerum, at exercitationem corporis illo officiis quia culpa
              excepturi asperiores ea quae sit! Inventore perferendis quas
              dolore dolorum non eos excepturi nisi repellat, perspiciatis iure
              ipsa alias sint earum repudiandae at repellendus vero quasi
              laboriosam est ex! Saepe, possimus eos!
            </p>
          </Fade>
        </div>
        <div className="what_do_we_do_contact_icons">
          <Icons isAppear={isAppear} />
        </div>
        <div>
          <WhatDoWeDoContactIcons isAppear={isAppear} />
        </div>
      </div>
    </div>
  );
};

export default WhatDoWeDo;
