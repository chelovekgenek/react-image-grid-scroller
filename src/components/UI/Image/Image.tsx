import React from "react";

import s from "./Image.module.scss";

interface IProps {
  src: string;
  text: string;
  alt?: string;
}

export const Image = ({ src, text, alt = "" }: IProps) => (
  <div className={s.container}>
    <img src={src} className={s.logo} alt={alt} />
    <p>{text}</p>
  </div>
);
