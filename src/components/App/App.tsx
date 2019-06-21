import React from "react";

import { Image } from "../UI";
import logo from "assets/logo.svg";

import s from "./App.module.scss";

export const App: React.FC = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <Image src={logo} text="Learn React" />
      </header>
    </div>
  );
};
