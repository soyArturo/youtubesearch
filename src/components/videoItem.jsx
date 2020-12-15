import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-title fw-bold">{video.snippet.title}</p>
            <p className="card-title">{video.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
