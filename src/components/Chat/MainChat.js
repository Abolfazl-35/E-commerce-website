import React, { useContext } from "react";
import "./Chat.css";
import { AuthContext } from "../../context/AuthContext";
import classNames from "classnames";
import SendIcon from '@mui/icons-material/Send';
import { Send } from "@mui/icons-material";
const MainChat = () => {
  const { chatPageOpen } = useContext(AuthContext);
  console.log(chatPageOpen);
  return (
    <>
      <div
        className={classNames(
          "chat-page bg-gray-300 h-[50vh] w-[70%] p-5 flex",
          { active: chatPageOpen }
        )}
      >
        <div className=" relative font-Roboto w-full flex flex-col justify-between">
          <h1>Whats seems to be problem?</h1>

          <form className="flex min-w-full">
            <div className="relative w-full">
              <input
                className=" rounded w-full p-1 h-9"
                name="massage"
                type="text"
                value=""
                autoFocus
              />
              <label
                htmlFor="massage"
                className=" absolute right-3 top-[.3rem]"
              >
                <button className="">
<SendIcon sx={{backgroundColor:"blue",padding:"5px",borderRadius:"1rem"}} /> </button> <button>
                </button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainChat;
