import "./button.scss";

const Button = ({ name, size, event }) => {
  return (
    <button onClick={event} className={`button button--${size}`}>
      {name}
    </button>
  );
};

export default Button;
