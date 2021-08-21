import { UseCallbackExample } from "./UseCallBackExample";
import { UseContextExample } from "./UseContextExample/UseContextExample";
import { UseContextExample2 } from "./UseContextExample/UseContextExample2";
import { UseEffectExample } from "./UseEffectExample";
import { UseMemoExample } from "./UseMemoExample";
import { UseReducerExample } from "./UseReducerExample";
import { UseReducerExample2 } from "./UseReducerExample2";
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
        <UseContextExample2 />
        <UseReducerExample />
        <UseReducerExample2 />
        <UseCallbackExample />
      </header>
    </div>
  );
}
