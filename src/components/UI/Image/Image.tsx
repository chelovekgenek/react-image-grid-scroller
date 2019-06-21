import React from "react"

import s from "./Image.module.scss"

interface IProps {
  src: string
  text: string
  alt?: string
}

export const Image = ({ src, text, alt = "" }: IProps) => <img src={src} className={s.container} alt={alt} />
