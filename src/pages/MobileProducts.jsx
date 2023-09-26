import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useCallback, useState } from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { Fade } from "react-reveal";

import img1 from "../public/images/plastic/1.jpg";
import img2 from "../public/images/plastic/2.jpg";
import img3 from "../public/images/plastic/3.jpg";
import img4 from "../public/images/plastic/4.jpg";
import img5 from "../public/images/plastic/5.jpg";
import img6 from "../public/images/plastic/2.jpg";
import img7 from "../public/images/plastic/6.jpg";
import img8 from "../public/images/plastic/4.jpg";

import ImageViewer from "react-simple-image-viewer";
const categories = [
   "PET Su Şişesi",
   "PP Kozmetik Şişesi",
   "HDPE Spor Şişesi ",
   "HDPE İlaç Şişesi Ve Çeşitleri",
   "PET Şampuan Şişesi",
   "PE Bebek Şişesi (Sızdırmaz Kapaklı)",
   "PP Kapaklı Kola Şişesi",
   "Polikarbonat (PC) İçecek Bardakları"
];
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img5];

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
