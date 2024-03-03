import React from "react";
import Comments from "./Comments";

const CommentList = ({comments, handleAddComments, handleDeleteComment}) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comments
        comment={comment}
        handleAddComments={handleAddComments}
        handleDeleteComment={handleDeleteComment}
      />
      <div className="ml-6 border-l border-gray-200">
        <CommentList
          comments={comment.replies}
          handleAddComments={handleAddComments}
          handleDeleteComment={handleDeleteComment}
        />
      </div>
    </div>
  ));
};

export default CommentList;
