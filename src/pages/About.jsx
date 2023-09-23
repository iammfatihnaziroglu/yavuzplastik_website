import React from "react";
import { motion, useIsPresent } from "framer-motion";

import "./Pages.css";

import { AiOutlineCopyright } from "react-icons/ai";
import useWindowSize from "../utit/useWindowSize";

const About = () => {
  const isPresent = useIsPresent();
  const { width } = useWindowSize();

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: 1,
        transition: { duration: 0.5, ease: "circOut" },
      }}
      /*  exit={{ scaleX: 0, transition: { duration: 0.5, ease: "circIn" } }} */
      style={{ originX: isPresent ? 0 : 1 }}
      className="about_container"
    >
      <div>
        <div>
          <h2>Hakkımızda</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            natus nesciunt laudantium, beatae accusantium dolorum odio debitis
            omnis quod deleniti vel aperiam vitae mollitia quos deserunt quam
            dicta. Ab labore quidem nihil perferendis optio, rem culpa
            consequuntur. Perspiciatis ullam dolores reprehenderit aliquam quae
            libero consequatur.
          </p>
          <h5>Oruç Pen</h5>
        </div>
        <h5>
          Arz Teknoloji
          <AiOutlineCopyright
            size={width <= 768 ? 21 : 27}
            className="pages_copyright"
          />{" "}
          Tüm Hakları Saklıdır.
        </h5>
      </div>
    </motion.div>
  );
};

export default About;
