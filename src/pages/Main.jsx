import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Pages.css";
import Header from "../components/HF/Header";
import Hero from "../components/Main/Hero";
import Bio from "../components/Main/Bio";

import MainVideo from "../public/videos/main-video.mp4";
import Video from "../components/Video/Video";
import WhatDoWeDo from "../components/Main/WhatDoWeDo";
import MainContact from "../components/Main/MainContact";

import logo from "../public/images/logo.svg";

import { motion, useIsPresent } from "framer-motion";
import KnowingAppearingDiv from "../utit/useKnowAppearingDiv";
import useWindowSize from "../utit/useWindowSize";
import ResizeSwiper from "../components/Swiper/ResizeSwiper";
import Icons from "../components/Main/Icons";
import MobileHeader from "../components/HF/MobileHeader";
const Main = () => {
  const { width } = useWindowSize();
  const isPresent = useIsPresent();
  const [bioIsAppear, setBioIsAooear] = useState(false);
  const [whatDoWeDoIsAppear, setWhatDoWeDoIsAppear] = useState(false);
  const [isMainContactAppear, setMainContactIsAppear] = useState(false);
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: 1,
        transition: { duration: 0.5, ease: "circOut" },
      }}
      style={{ originX: isPresent ? 0 : 1 }}
    >
      <Swiper
        allowSlideNext
        allowSlidePrev
        direction={"vertical"}
        slidesPerView={1}
        loop
        spaceBetween={10}
        mousewheel={true}
        pagination={{
          clickable: false,
          enabled: false,
        }}
        allowTouchMove={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {width <= 768 ? <MobileHeader /> : <Header />}
          <Hero />
        </SwiperSlide>
        <SwiperSlide className="main_bio_slide">
          <KnowingAppearingDiv setIsAppear={setBioIsAooear}>
            <Bio isAppear={bioIsAppear} />
          </KnowingAppearingDiv>
        </SwiperSlide>
        {width <= 768 && (
          <SwiperSlide>
            <ResizeSwiper width={width} />
            <div style={{ marginTop: "2.5rem" }}>
              <Icons isAppear={true} />
            </div>
            <h3 className="main_mobile_signature">Oruç Pen</h3>
          </SwiperSlide>
        )}
        <SwiperSlide>
          <img className="main_video_svg" src={logo} alt="logo" />
          <Video src={MainVideo} />
        </SwiperSlide>
        <SwiperSlide>
          <KnowingAppearingDiv setIsAppear={setWhatDoWeDoIsAppear}>
            <WhatDoWeDo isAppear={whatDoWeDoIsAppear} />
          </KnowingAppearingDiv>
        </SwiperSlide>
        <SwiperSlide id="main-contact">
          <KnowingAppearingDiv setIsAppear={setMainContactIsAppear}>
            <MainContact isAppear={isMainContactAppear} />
          </KnowingAppearingDiv>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Main;
