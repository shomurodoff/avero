import React from "react";

const VideoLoader = () => {
  return (
    <video autoPlay muted loop className="fixed  inset-0">
      <source src="video-loader.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoLoader;
