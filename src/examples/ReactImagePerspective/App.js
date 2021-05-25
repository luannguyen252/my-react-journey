import React, { Component } from "react";
import TiltPhaseOne from "./TiltPhaseOne";
import TiltPhaseTwo from "./TiltPhaseTwo";
import TiltPhaseThree from "./TiltPhaseThree";
import TiltPhaseFour from "./TiltPhaseFour";
import TiltPhaseFive from "./TiltPhaseFive";
import TiltPhaseSix from "./TiltPhaseSix";
import background from "./background.png";
import foreground from "./foreground.png";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const options = {
  max: 10,
  perspective: 1000,
  scale: 1.05,
};

// Phase 1
// export default TiltPhaseOne

// Phase 2
// export default TiltPhaseTwo

// Phase 3
// export default TiltPhaseThree

// Phase 4
// export default TiltPhaseFour

// Phase 5
// export default TiltPhaseFive

// Phase 6
class App extends Component {
  render() {
    return (
      <div id="App">
        <TiltPhaseFive
          options={{}}
          style={{
            background: `url(${background}) no-repeat fixed center`,
            backgroundSize: "fit",
            height: 700,
            width: 740,
          }}
        >
          <TiltPhaseFive options={options}>
            <img src={foreground} alt="" />
          </TiltPhaseFive>
        </TiltPhaseFive>
      </div>
    );
  }
}

export default App;
