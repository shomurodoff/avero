import React from "react";

const VideoLoader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-y-hidden bg-slate-400">
      <video autoPlay muted loop className="min-w-full min-h-full object-cover">
        <source src="video-loader.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoLoader;
