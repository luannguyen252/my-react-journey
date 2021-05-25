import React, { PureComponent } from "react";
import ReactMarkdown from "react-markdown";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import "./styles.scss";
import markdown from "./markdown.md";
import markdownHTML from "./markdownHTML.md";

export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <ReactMarkdownWithHtml
          children={`${markdownHTML}`}
          allowDangerousHtml
        />
        <ReactMarkdown children={`${markdown}`} />
      </div>
    );
  }
}
