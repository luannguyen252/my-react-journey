import { useState, useEffect, useDebugValue } from "react";

const ChatAPI = {
  subscribeToFriendStatus: (id, handleStatusChange) => {
    handleStatusChange({ isOnline: id % 2 === 0 ? true : false });
  },
  unsubscribeFromFriendStatus: (id, handleStatusChange) => {
    handleStatusChange({ isOnline: false });
  },
};

function useFriendStatus(friendID) {
  const date = new Date();
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  useDebugValue(date, (date) => date.toDateString());

  return isOnline;
}

export default useFriendStatus;
