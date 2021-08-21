import { UseEffectExample } from "./UseEffectExample";
import { UseStateExample } from "./UseStateExample";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning React Hooks</h1>
        <UseStateExample />
        <UseEffectExample />
      </header>
    </div>
  );
}
