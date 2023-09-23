import React from "react";

import { Container } from "@mui/material";

import homeBio from "../../public/images/plastic/6.jpg";
import { TiTick } from "react-icons/ti";

import "../CompCss.css";
import ResizeSwiper from "../Swiper/ResizeSwiper";
import { Fade } from "react-reveal";
import useWindowSize from "../../utit/useWindowSize";

const Bio = ({ isAppear }) => {
  const { width } = useWindowSize();
  return (
    <>
      <Container maxWidth="xl">
        <div className="bio_info_wrapper">
          <div>
            <Fade when={isAppear} left duration={1250}>
              <h2>Yavuz Plastik Kimdir?</h2>
            </Fade>
            <Fade when={isAppear} left duration={1350}>
              <p>
              1973 yılında plastik şişe üretimine Isparta'da başlayan Yavuz Plastik o günden bu güne enerjisini ve heyecanını hiç kaybetmeden üretimine devam etmektedir.
              </p>
            </Fade>
            <div>
              <Fade when={isAppear} left duration={1450}>
                <p>
                  <span>
                    <TiTick size={24} />
                  </span>
                  Kozmetik, otomotiv, ve gıda gibi daha birçok sektöre yönelik plastik şişe üretimi, plastik kapak, pet şişe, gibi birçok ürünün üretimini yapan firmamız, sektördeki uzun yıllarının getirdiği tecrübe ve itibarla bu işin nasıl yapılacağını her zaman en doğru şekilde göstermiştir.
                </p>
              </Fade>
              <Fade when={isAppear} left duration={1550}>
                <p>
                  <span>
                    <TiTick size={24} />
                  </span>
                  Yavuz Plastik, tesislerinde her zaman son model cihazlarla üretim yaparak, gerek çeşitlilik, gerekse kalite bakımından ürünlerinde en üst segmenti yakalamayı hedef edinmiştir.
                </p>
              </Fade>
              <Fade when={isAppear} left duration={1650}>
                <p>
                  <span>
                    <TiTick size={24} />
                  </span>
                  Yavuz Plastik, plastik dünyasına heyecan, güvenli alışveriş ve kalite katmaya devam ediyor.
                </p>
              </Fade>
            </div>
            <Fade when={isAppear} left duration={1750}>
              <p className="bio_bottom_text">
              Yavuz Plastik olarak, geleceğin sürdürülebilir plastik çözümlerini şekillendirirken, çevreye duyarlılığıyla da dikkat çekiyoruz!
              </p>
            </Fade>
          </div>
          <Fade when={isAppear} right duration={1550}>
            <img className="bio_image" src={homeBio} alt="bottle6_bio" />
          </Fade>
        </div>
        {width <= 768 ? null : (
          <Fade when={isAppear} bottom duration={1350}>
            <ResizeSwiper />
          </Fade>
        )}
      </Container>
    </>
  );
};

export default Bio;
