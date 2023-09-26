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
          <h2 className="about_us_h2">Hakkımızda</h2>
          <p className="about_us_all">
          <h3>Biz Kimiz?</h3>

<p className="about_us_p">Yavuz Plastik, pet şişe üretiminde mükemmel bir kalite ve yenilikçilikle öne çıkan uluslararası bir Türk şirketidir. Plastik ambalaj sektöründeki 20 yıllık deneyimimizle, yaratıcı çözümler sunarak dünya çapında müşterilerimizin ihtiyaçlarını karşılıyoruz.
</p>
<h3>Kalite ve Güvenilirlik</h3>
<p  className="about_us_p">
Müşterilerimize en yüksek kalitede pet şişeler sunmak, işimizin temelidir. Ürünlerimiz, uluslararası standartlara ve endüstri lideri kalite kontrollerine tabi tutulur. Müşterilerimize sadece en iyisini sunma taahhüdümüzü sürdürmek için sürekli olarak yatırım yapmaktayız.
</p>
<h3>Sürdürülebilirlik</h3>
<p  className="about_us_p">
Yavuz Plastik olarak, çevresel sorumluluğumuzun bilincindeyiz. Üretim süreçlerimizi sürekli olarak geliştiriyor ve çevresel etkileri azaltmak için sürdürülebilir malzemeleri tercih ediyoruz. Sürdürülebilirlik, gelecek nesillere daha temiz bir dünya bırakma taahhüdümüzün bir parçasıdır.
</p>
<h3>Müşteri Odaklılık</h3>
<p  className="about_us_p">
Müşterilerimiz bizim için her şeydir. İhtiyaçlarınıza uygun özelleştirilmiş çözümler sunarak, işbirliği yapmaktan ve sizi daha iyi hizmet etmek için sürekli olarak çalışmaktan mutluluk duyuyoruz. Müşteri memnuniyeti, Yavuz Plastik'in en büyük önceliğidir.
</p>
<h3>İnovasyon ve Gelişim</h3>
<p  className="about_us_p">
Teknolojinin hızla değiştiği bir çağda, Yavuz Plastik olarak her zaman önde olmayı hedefliyoruz. Araştırma ve geliştirmeye yaptığımız yatırımlarla, sektörümüzdeki yenilikleri belirlemeye ve liderlik etmeye devam ediyoruz.
</p>
<h3>Misyonumuz</h3>
<p  className="about_us_p">
Müşterilerimize en iyi kalitede pet şişe ürünleri sunarak, onların ihtiyaçlarını karşılamak ve dünya genelinde güvenilir bir iş ortağı olmak.
</p>
<h3>Vizyonumuz</h3>
<p  className="about_us_p">
Yavuz Plastik olarak, sürdürülebilirlik, kalite ve müşteri memnuniyeti konularında endüstri lideri olmayı hedefliyoruz. İnovasyon ve yaratıcılıkla geleceğin ambalaj çözümlerini şekillendirmeyi amaçlıyoruz.

Bizimle çalışarak, pet şişelerinizde mükemmelliği keşfedin. Yavuz Plastik, size daha iyi bir gelecek sunmaya ve işinizi bir adım öne taşımaya hazır.

İhtiyaçlarınıza uygun çözümler için bize ulaşın.
</p>
          </p>
          <h5>Yavuz Plastik</h5>
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
