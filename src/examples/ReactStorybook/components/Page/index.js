import React from "react";
import Header from "../Header";
import "./styles.css";

const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <main>
    <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    />

    <div className="container">
      <h1>Page Title</h1>
      <p>
        A paragraph is a series of related sentences developing a central idea,
        called the topic. Try to think about paragraphs in terms of thematic
        unity: a paragraph is a sentence or a group of sentences that supports
        one central, unified idea. Paragraphs add one idea at a time to your
        broader argument.
      </p>

      <p>
        A paragraph is a series of related sentences developing a central idea,
        called the topic. Try to think about paragraphs in terms of thematic
        unity: a paragraph is a sentence or a group of sentences that supports
        one central, unified idea. Paragraphs add one idea at a time to your
        broader argument.
      </p>

      <p>
        A paragraph is a series of related sentences developing a central idea,
        called the topic. Try to think about paragraphs in terms of thematic
        unity: a paragraph is a sentence or a group of sentences that supports
        one central, unified idea. Paragraphs add one idea at a time to your
        broader argument.
      </p>
    </div>
  </main>
);

export default Page;
