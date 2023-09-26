import React, { useCallback, useState } from "react";
import { Col, Row } from "antd";

import ImageViewer from "react-simple-image-viewer";
import "./Pages.css";
import { motion, useIsPresent } from "framer-motion";
import { AiOutlineCopyright } from "react-icons/ai";

import img1 from "../public/images/plastic/1.jpg";
import img2 from "../public/images/plastic/2.jpg";
import img3 from "../public/images/plastic/3.jpg";
import img4 from "../public/images/plastic/4.jpg";
import img5 from "../public/images/plastic/5.jpg";
import img6 from "../public/images/plastic/2.jpg";
import img7 from "../public/images/plastic/6.jpg";
import img8 from "../public/images/plastic/4.jpg";

const Products = () => {
  const [title, setTitle] = useState("Konteyner");
  const isPresent = useIsPresent();

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img1];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: 1,
        transition: { duration: 0.5, ease: "circOut" },
      }}
      style={{ originX: isPresent ? 0 : 1 }}
      className="product_container"
    >
      <div className="product_list_container">
        <ul
          onClick={({ target }) => {
            if (target.tagName === "LI") {
              setTitle(target.innerText);
            }
          }}
        >
          <li>Konteyner</li>
          <li>Betonarme Bina</li>
          <li>Prefabrik Ev</li>
          <li>PVC Kapı ve Pencere</li>
          <li>Cam Balkon</li>
          <li>Alüminyum Doğrama</li>
          <li>Otomasyon Sistemleri</li>
          <li>Panjur</li>
          <li>Duşakabin ve Duş Teknesi</li>
        </ul>
        <div>
          <h5 className="products_title">{title}</h5>
          <Row>
            {images.map((src, index) => (
              <Col>
                <img
                  src={src}
                  className="products_image"
                  onClick={() => openImageViewer(index)}
                  key={index}
                  alt={`product-${index}`}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={true}
          backgroundStyle={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
      <h5 className="products_footer">
        Arz Teknoloji
        <AiOutlineCopyright
          size={27}
          style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
        />{" "}
        Tüm Hakları Saklıdır.
      </h5>
    </motion.div>
  );
};

export default Products;
