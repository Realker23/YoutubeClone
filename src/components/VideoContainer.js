import React, {useEffect, useState} from "react";
import VideoCards from "./VideoCards";
import {YOUTUBE_API} from "../utils/contants";
import {Link} from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    setVideos(data.items);
  };

  if (!videos.length) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-wrap justify-evenly pt-4">
      {videos.map((video) => {
        return (
          <Link key={video.id} className="pt-4" to={"/watch/" + video.id}>
            <VideoCards info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
