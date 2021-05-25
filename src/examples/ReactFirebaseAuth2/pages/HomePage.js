import React from "react";
import firebaseConfig from "../config/firebaseConfig";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
