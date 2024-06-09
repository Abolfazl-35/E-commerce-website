import React, { useContext } from "react";
import "./Chat.css";
import { AuthContext } from "../../context/AuthContext";
import classNames from "classnames";
import SendIcon from '@mui/icons-material/Send';
import { ChatContext } from "../../context/ChatContext";
import { Avatar } from "@mui/material";

const MainChat = () => {
  const {User} = useContext(AuthContext);
  const { chatPageOpen } = useContext(AuthContext);
  const{ UserChats,isUserChatsLoading,UserChatsError}=useContext(ChatContext)

  console.log(User)
  return (
    <div>
      
      <div
        className={classNames(
          "chat-page bg-gray-100  h-[50vh] w-[96%] sm:w-[70%] p-5 flex flex-col justify-between",
          { active: chatPageOpen }
        )}
      >
  <div className="fixed top-0 left-0 flex justify-between items-center space-x-2 w-full p-3 shadow-sm rounded">
 <div>
  options
 </div>
 <div className="flex items-center space-x-3">
   <h1>
      {User.Firstname}
    </h1>
   
  <Avatar
src={User?.profileimage?User.profileimage:null}
sx={{width:40,height:40}}
>
</Avatar>
 </div>

</div>
<div>

</div>
        <div className=" relative font-Roboto w-full flex flex-col justify-between">
          

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
    </div>
  );
};

export default MainChat;
