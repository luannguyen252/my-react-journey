import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlockSample = () => {
  const codeString = `class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }`;

  return (
    <SyntaxHighlighter language="javascript" style={duotoneDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlockSample;
