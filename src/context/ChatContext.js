import { createContext, useEffect, useState } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, User }) => {
  const [UserChats, setUserChats] = useState(null);

  const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);

  const [UserChatsError, setUserChatsError] = useState(null);

  useEffect(() => {
    const getUserChats = async () => {
      if (User?._id) {
        setIsUserChatsLoading(true);
        setUserChatsError(null)

        const response = await getRequest(`${baseUrl}/chats/${User?._id}`);
        setIsUserChatsLoading(false);
        if (response.error) {return setUserChatsError(response)};
      return setUserChats(response);
    }
      
    };

    getUserChats();
  }, [User]);

  return (
    <ChatContext.Provider
      value={{
        UserChats,
        isUserChatsLoading,
        UserChatsError,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
