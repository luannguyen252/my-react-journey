import { UseContextExample } from "./UseContextExample";
import { UseEffectExample } from "./UseEffectExample";
import { UseMemoExample } from "./UseMemoExample";
import { UseRefExample } from "./UseRefExample";
import { UseStateExample } from "./UseStateExample";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning React Hooks</h1>
        <UseStateExample />
        <UseEffectExample />
        <UseMemoExample />
        <UseRefExample />
        <UseContextExample />
      </header>
    </div>
  );
}
