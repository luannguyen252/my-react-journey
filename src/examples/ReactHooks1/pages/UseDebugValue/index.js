import React from "react";
import FriendListItem from "./FriendListItem";

function UseDebugValue() {
  return (
    <div>
      <h1>useDebugValue</h1>
      {data.map((item, index) => (
        <FriendListItem key={index} friend={{ id: item.id, name: item.name }} />
      ))}
    </div>
  );
}

export default UseDebugValue;

const data = [
  {
    id: 1,
    name: "Luan",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Cook",
  },
  {
    id: 4,
    name: "Gates",
  },
  {
    id: 5,
    name: "Musk",
  },
];
