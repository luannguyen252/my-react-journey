import React from "react";
import "./styles.css";

export default function Hello({ name, isGuest }) {
  return (
    <p>
      Hello, <b>{`${!isGuest ? name : `Guest`}`}</b>,{" "}
      {`${!isGuest ? `Welcome back!` : `Please login`}`}
    </p>
  );
}

export function IsLoading({ loading }) {
  if (loading) {
    return <p>Currently loading, please hold on.</p>;
  }
  return <p>Here's your content</p>;
}
