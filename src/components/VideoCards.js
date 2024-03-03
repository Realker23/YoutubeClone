import React from "react";

const VideoCards = ({info}) => {
  // console.log(info);
  const {snippet, statistics} = info;
  const {thumbnails, channelTitle, title} = snippet;
  const views =
    Number(statistics.viewCount) > 1000000
      ? statistics.viewCount.substr(0, 2) + "M"
      : statistics.viewCount;

  return (
    <div className=" w-96 h-[336px] p-2 mx-4 rounded-lg hover:scale-105">
      <div className="cursor-pointer hover:scale-105 w-10/12">
        <img
          className="rounded-lg"
          alt="video-img"
          src={thumbnails.medium.url}
        />
        <div className="">
          <h3 className="text-white font-semibold">{title}</h3>
          <span className="text-gray-400 text-xs">{channelTitle}</span>
          <div className="views flex items-center">
            <span className="text-gray-400 text-xs">{views + " views"}</span>
            <span className="text-gray-400 text-sm px-1">.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
