// import {comments} from "../utils/contants";
import {useState} from "react";
import {FaUser} from "react-icons/fa";
import {FaReply} from "react-icons/fa";
// import {comments} from "../utils/contants";

const Comments = ({comment, handleAddComments, handleDeleteComment}) => {
  const {name, text} = comment;
  const [inputActive, setInputActive] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    const newComment = {
      name: "mnp",
      id: Date.now(),
      text: inputText,
      replies: [],
    };

    handleAddComments(comment.id, newComment);
    setInputActive(false);
  };

  const handleDelete = () => {
    handleDeleteComment(comment.id);
  };

  return (
    <div>
      <div className="w-full text-white flex py-4 bg-slate-600">
        <div className="flex font-semibold text-xl p-3 cursor-pointer">
          <FaUser />
        </div>
        <div className="text-white">
          <p>{name}</p>
          <span>{text}</span>
        </div>
      </div>
      {inputActive && (
        <input
          className="m-2 rounded bg-gray-200 text-black px-2 w-2/3"
          type="text"
          value={inputText}
          autoFocus
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      )}
      {inputActive ? (
        <div className="flex gap-4">
          <div
            className="p-2 flex items-center gap-2  cursor-pointer"
            onClick={handleAdd}
          >
            Add
          </div>
          <div
            className="p-2 flex items-center gap-2  cursor-pointer"
            onClick={() => setInputActive(false)}
          >
            Cancel
          </div>
        </div>
      ) : (
        <div className="flex gap-4">
          <div
            className="p-2 flex items-center gap-2  cursor-pointer"
            onClick={() => setInputActive(true)}
          >
            <FaReply /> Reply
          </div>
          <div
            className="p-2 flex items-center gap-2  cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
