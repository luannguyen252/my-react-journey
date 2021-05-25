import React, { PureComponent } from "react";
import { withTranslation } from "react-i18next";
import lang_en from "./lang_en.svg";
import lang_vi from "./lang_vi.svg";

class SwitchLanguage extends PureComponent {
  render() {
    const { i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <ul className="switch-language">
        <li onClick={() => changeLanguage("en")}>
          <img src={lang_en} title="English" alt="English" />
          <span>English</span>
        </li>
        <li onClick={() => changeLanguage("vi")}>
          <img src={lang_vi} title="Tiếng Việt" alt="Tiếng Việt" />
          <span>Tiếng Việt</span>
        </li>
      </ul>
    );
  }
}

export default withTranslation("translations")(SwitchLanguage);
