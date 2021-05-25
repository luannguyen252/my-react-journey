import React from "react";
import useFriendStatus from "./useFriendStatus.js";

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return <p className={isOnline ? `online` : `offline`}>{props.friend.name}</p>;
}

export default FriendListItem;
