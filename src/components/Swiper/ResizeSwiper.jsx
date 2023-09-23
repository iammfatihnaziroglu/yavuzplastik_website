import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import BioCard from "../UI/BioCard";

import image1 from "../../public/images/bg-1.jpg";
import image2 from "../../public/images/bg-2.jpg";
import image3 from "../../public/images/bg-3.jpg";
import image4 from "../../public/images/bg-4.jpg";
import image5 from "../../public/images/bg-5.jpg";
import image6 from "../../public/images/bg-6.jpg";
import image7 from "../../public/images/bg-7.jpg";
import image8 from "../../public/images/bg-8.jpg";
import image9 from "../../public/images/bg/stripe-bg-1.jpg";

const ResizeSwiper = ({ width }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={false}
        style={{
          height: "17rem",
          marginTop: "1rem",
          width: "100%",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="resize_swiper"
      >
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <BioCard imageSrc={image1} />
          {width <= 768 ? null : (
            <>
              <BioCard imageSrc={image2} />
              <BioCard imageSrc={image3} />
            </>
          )}
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <BioCard imageSrc={image4} />
          {width <= 768 ? null : (
            <>
              <BioCard imageSrc={image5} />
              <BioCard imageSrc={image6} />
            </>
          )}
        </SwiperSlide>{" "}
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <BioCard imageSrc={image7} />
          {width <= 768 ? null : (
            <>
              <BioCard imageSrc={image8} />
              <BioCard imageSrc={image9} />
            </>
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ResizeSwiper;
