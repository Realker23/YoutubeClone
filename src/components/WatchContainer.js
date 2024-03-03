import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {closeMenu} from "../utils/menuToggleSlice";
import {comments} from "../utils/contants";
import CommentList from "./CommentList";
import {useState} from "react";
import useFunction from "../utils/customHooks/useFunction";
import LiveChat from "./LiveChat";

const WatchContainer = () => {
  const {id} = useParams();
  const [commentsData, setCommentsData] = useState(comments);
  const {addComment, deleteComment} = useFunction();

  const handleAddComments = (commentId, commentText) => {
    const updatedTree = addComment(commentsData, commentId, commentText);
    setCommentsData(updatedTree);
  };

  const handleDeleteComment = (commentId) => {
    const updatedTree = deleteComment(commentsData, commentId);
    setCommentsData(updatedTree);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [commentsData]);

  return (
    <div className="text-white rounded-lg w-full">
      <div className="flex w-full">
        <div className="w-full">
          <iframe
            className="text-white rounded-lg"
            width="1200"
            height="700"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-white border-white border w-full m-1 p-2 rounded-lg h-[700px]">
          <h2 className=" font-bold border-b border-white">Live chat :</h2>
          <LiveChat />
        </div>
      </div>
      <div className="p-4 ">
        <div className="font-bold text-lg "> Comments : </div>

        <CommentList
          comments={commentsData}
          handleAddComments={handleAddComments}
          handleDeleteComment={handleDeleteComment}
        />
      </div>
    </div>
  );
};

export default WatchContainer;
