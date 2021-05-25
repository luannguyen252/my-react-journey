import { useGet } from "restful-react";

export default function App() {
  const { error, loading, data } = useGet({ path: "/breeds/image/random" });

  return (
    <div className="App">
      <h1>Hello Restful React</h1>
      {error && <h1>{error.message}</h1>}
      {loading && <h2>Loading...</h2>}
      {data && <img src={data.message} title={data.message} alt="Good Dog" />}
    </div>
  );
}
