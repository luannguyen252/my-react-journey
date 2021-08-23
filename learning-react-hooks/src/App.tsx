import { UseCallbackExample } from "./UseCallBackExample";
import { UseContextExample } from "./UseContextExample/UseContextExample";
import { UseContextExample2 } from "./UseContextExample/UseContextExample2";
import { UseEffectExample } from "./UseEffectExample";
import UseLocalStorageExample from "./UseLocalStorageExample";
import { UseMemoExample } from "./UseMemoExample";
import { UseReducerExample } from "./UseReducerExample";
import { UseReducerExample2 } from "./UseReducerExample2";
import { UseRefExample } from "./UseRefExample";
import { UseStateExample } from "./UseStateExample";

export default function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Learning React Hooks</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <UseLocalStorageExample />
            </div>
            <div className="col-md-6">
              <UseStateExample />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <UseEffectExample />
            </div>
            <div className="col-md-6">
              <UseMemoExample />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <UseRefExample />
            </div>
            <div className="col-md-6">
              <UseContextExample />
              <UseContextExample2 />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <UseReducerExample />
              <UseReducerExample2 />
            </div>
            <div className="col-md-6">
              <UseCallbackExample />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
