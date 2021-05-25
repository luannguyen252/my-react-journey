import React from "react";
import Button from "../Button";
import "./styles.css";

const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <main>
    <div className="container">
      <header>
        <h1>Logo</h1>
        <nav>
          {user ? (
            <Button size="medium" onClick={onLogout} label="Log out" />
          ) : (
            <>
              <Button size="medium" onClick={onLogin} label="Log in" />
              <Button
                primary
                size="medium"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </nav>
      </header>
    </div>
  </main>
);

export default Header;
