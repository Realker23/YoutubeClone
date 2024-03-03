import React, {useEffect, useState} from "react";
import Chat from "./Chat";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../utils/chatSlice";
import {generateRandomName} from "../utils/helper";
import {IoSend} from "react-icons/io5";

const LiveChat = () => {
  const [inputMessage, setInputMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("API polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          text: "Lorem ipsum Dolor site ammet",
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="p-2 overflow-hidden overflow-y-scroll h-[620px] flex flex-col-reverse ">
        {chatMessages.map((c, i) => {
          return <Chat key={i} name={c.name} text={c.text} />;
        })}
      </div>
      <form
        className="flex justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Abhishek",
              text: inputMessage,
            })
          );
          setInputMessage("");
        }}
      >
        <input
          type="text"
          placeholder="write something"
          className="m-2 rounded-lg w-full px-2 py-1 text-black"
          value={inputMessage}
          onChange={(e) => {
            setInputMessage(e.target.value);
          }}
        />
        {/* {console.log(inputMessage)} */}
        <button className="px-2" type="submit">
          <IoSend />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
