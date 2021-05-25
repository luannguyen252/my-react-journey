import React, { PureComponent } from "react";
import TiltPhaseSix from "./TiltPhaseSix";
import "./PerspectiveTilt.css";

const options = {
  max: 10,
  perspective: 1000,
  scale: 1.05,
};

export default class PerspectiveTilt extends PureComponent {
  render() {
    return (
      <div id="PerspectiveTilt">
        <TiltPhaseSix
          options={{}}
          style={{
            background: "red",
            backgroundSize: "fit",
            width: 800,
            height: 600,
          }}
        >
          <TiltPhaseSix options={options}>
            <div
              style={{
                background: "green",
                backgroundSize: "fit",
                height: 300,
                width: 300,
              }}
            />
          </TiltPhaseSix>
        </TiltPhaseSix>
      </div>
    );
  }
}
