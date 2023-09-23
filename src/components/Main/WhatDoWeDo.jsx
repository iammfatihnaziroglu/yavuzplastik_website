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
            Uluslararası arenada faaliyet gösteren bir plastik şişe üreticisi olarak, müşterilerimize yüksek kalitede ürünler sunma misyonuyla hareket ediyoruz. Geniş ürün yelpazemiz ve uzman ekibimiz sayesinde, müşterilerimizin farklı ihtiyaçlarına ve pazar taleplerine hızlı ve esnek bir şekilde cevap verebiliyoruz. Ayrıca, uluslararası pazarlarda güçlü bir varlık oluşturarak, dünya çapında müşteri ağımızı genişletmeye ve kaliteli plastik ambalaj çözümlerimizi daha fazla insanın hizmetine sunmaya devam ediyoruz.
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
