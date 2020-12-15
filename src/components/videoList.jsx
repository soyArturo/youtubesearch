import React from "react";
import VideoItem from "./videoItem";

import "./videoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
  const videolist = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="list-group">{videolist}</div>;
};

export default VideoList;
