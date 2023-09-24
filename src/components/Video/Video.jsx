import React from "react";

const Video = ({ src }) => {
  return (
    <video
      className="video_yp"
      style={{ width: "100vw", height: "100vh", objectFit: "auto" }}
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
