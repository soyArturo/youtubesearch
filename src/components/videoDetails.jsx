import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className=""></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-12">
          <iframe
            width="100%"
            height="492"
            src={videoSrc}
            title={video.snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="col-md-12">
          <div
            className="card mx-auto mt-3"
            style={{
              borderRadius: "10px",
              //   border: "2px solid #616161",
            }}>
            <div className="card-body">
              <h5 className="card-title fw-bold">{video.snippet.title}</h5>
              <p className="card-text">{video.snippet.channelTitle}</p>
              <p className="card-text">{video.snippet.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
