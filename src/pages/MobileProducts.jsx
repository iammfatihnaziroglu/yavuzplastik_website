import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useCallback, useState } from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { Fade } from "react-reveal";

import img1 from "../public/images/bg-1.jpg";
import img2 from "../public/images/bg-2.jpg";
import img3 from "../public/images/bg-3.jpg";
import img4 from "../public/images/bg-4.jpg";
import img5 from "../public/images/bg-5.jpg";
import img6 from "../public/images/bg-6.jpg";
import img7 from "../public/images/bg-7.jpg";
import img8 from "../public/images/bg-8.jpg";

import ImageViewer from "react-simple-image-viewer";
const categories = [
  "Konteyner",
  "Betonarme Bina",
  "Prefabrik Ev",
  "PVC Kapı ve Pencere",
  "Cam Balkon",
  "Alüminyum Doğrama",
  "Otomasyon Sistemleri",
  "Panjur",
  "Duşakabin ve Duş Teknesi",
];
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img1];

const MobileProducts = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <>
      <div className="mobile_products_container">
        <Fade duration={1500} top>
          <select>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Fade>
        <div>
          {images.map((image, index) => (
            <Fade left duration={1250 + 100 * index}>
              <img
                onClick={() => openImageViewer(index)}
                src={image}
                alt={`product ${index}`}
              />
            </Fade>
          ))}
        </div>
        <h5 style={{ display: "flex", alignItems: "center" }}>
          Arz Teknoloji
          <AiOutlineCopyright
            size={19}
            style={{ marginLeft: ".3rem", marginRight: ".3rem" }}
          />{" "}
          Tüm Hakları Saklıdır.
        </h5>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={true}
          backgroundStyle={{ backgroundColor: "rgba(0,0,0)", zIndex: 8000 }}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
};

export default MobileProducts;
