import React, { useState } from "react";

export default function Button({ label }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <p>Button is {isClicked ? `Clicked` : `Not Clicked`}</p>
      <button onClick={() => setIsClicked(true)}>{label}</button>
    </>
  );
}
