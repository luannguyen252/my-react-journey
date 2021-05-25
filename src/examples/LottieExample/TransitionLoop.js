import React from "react";
import Lottie from "react-lottie";
import * as animationDataA from "./assets/TwitterHeart.json";
import * as animationDataB from "./assets/beating-heart.json";

export default class TransitionLoop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isStopped: true,
      isPaused: false,
      speed: 1,
      direction: 1,
      isLike: false,
      isTransitioned: false,
    };
  }

  transition() {
    this.setState({ isTransitioned: true });
  }

  clickHandler = () => {
    this.setState({ isTransitioned: false });
  };

  render() {
    const centerStyle = {
      display: "block",
      margin: "10px auto",
      textAlign: "center",
    };
    const { isTransitioned } = this.state;
    const defaultOptions = {
      animationData: !isTransitioned ? animationDataA : animationDataB,
      loop: true,
      autoplay: true,
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          eventListeners={
            !isTransitioned
              ? [
                  {
                    eventName: "loopComplete",
                    callback: () => this.transition(),
                  },
                ]
              : []
          }
        />
        <button style={centerStyle} onClick={this.clickHandler}>
          restart
        </button>
      </div>
    );
  }
}
