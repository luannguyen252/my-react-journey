import React from "react";
import Lottie from "react-lottie";
import * as animationDataA from "./assets/TwitterHeart.json";
import * as animationDataB from "./assets/beating-heart.json";

export default class TransitionWithOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoopedAnimation: true,
    };
  }

  clickHandler = () => {
    this.setState({ showLoopedAnimation: !this.state.showLoopedAnimation });
  };

  render() {
    const centerStyle = {
      display: "block",
      margin: "20px auto",
      textAlign: "center",
    };
    const { showLoopedAnimation } = this.state;
    const animationOptionsWithLoop = {
      animationData: animationDataA,
      loop: true,
    };
    const animationOptionsWithoutLoop = {
      animationData: animationDataB,
      loop: false,
    };

    return (
      <div>
        <Lottie
          options={
            showLoopedAnimation
              ? animationOptionsWithLoop
              : animationOptionsWithoutLoop
          }
          height={400}
          width={400}
        />
        <p style={centerStyle}>
          This animation is {showLoopedAnimation ? "looped" : "not looped"}
        </p>
        <button style={centerStyle} onClick={this.clickHandler}>
          switch
        </button>
      </div>
    );
  }
}
