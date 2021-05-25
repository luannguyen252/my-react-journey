import Button from "./Button";

export default function App() {
  return (
    <div className="App">
      <p>
        <Button
          name="Large Button"
          size="large"
          event={() => console.log("It's an event call from a large button.")}
        />
      </p>

      <p>
        <Button
          name="Medium Button"
          size="medium"
          event={() => console.log("It's an event call from a medium button.")}
        />
      </p>

      <p>
        <Button
          name="Small Button"
          size="small"
          event={() => console.log("It's an event call from a small button.")}
        />
      </p>
    </div>
  );
}
