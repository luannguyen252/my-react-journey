import site from "./config";
import { newConfig1, newConfig2 } from "./newConfig";

export default function App() {
  return (
    <div className="App">
      <h1>{site.title}</h1>
      <h2>{site.description}</h2>
      <hr />
      <h1>{newConfig1.title}</h1>
      <h2>{newConfig1.description}</h2>
      <hr />
      <h1>{newConfig2.name}</h1>
      <h2>{newConfig2.age}</h2>
    </div>
  );
}
