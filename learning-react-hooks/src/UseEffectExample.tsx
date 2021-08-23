import { useState, useEffect } from "react";
import PropTypes from "prop-types";

interface UseEffectExampleProps {
  name?: string | any;
}

const WindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeHandle = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandle);
  }, []);

  return <p>Window Size: {windowWidth}</p>;
};

export const UseEffectExample: React.FC<UseEffectExampleProps> = ({ name }) => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <h4>{name}</h4>
      <p>{resourceType}</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <div className="overflow-hidden">
        {items.map((item, index) => (
          <pre key={index}>{JSON.stringify(item)}</pre>
        ))}
      </div>
      <WindowSize />
    </>
  );
};

UseEffectExample.propTypes = {
  name: PropTypes.string,
};

UseEffectExample.defaultProps = {
  name: "useEffect Example",
};
