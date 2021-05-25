import Marquee from "react-fast-marquee";
import "./styles.scss";
import MyComponent from "./MyComponent";

export default function App() {
  return (
    <div className="App">
      <Marquee>
        <MyComponent />
      </Marquee>
    </div>
  );
}
