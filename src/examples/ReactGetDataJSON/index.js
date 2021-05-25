import "./styles.scss";
import peopleData from "./data.json";

export default function App() {
  return (
    <div className="App">
      <h1>Get data from JSON file</h1>
      {peopleData.map((item, index) => {
        return (
          <ul key={index}>
            <li>
              <span>Name:</span>
              <label>{item.name}</label>
            </li>
            <li>
              <span>Role:</span>
              <label className={`${item.roleID}`}>{item.role}</label>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
