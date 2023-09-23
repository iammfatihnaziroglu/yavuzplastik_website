import React from "react";

const Video = ({ src }) => {
  return (
    <video
      style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
      autoPlay
      loop
      muted
      controls
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
