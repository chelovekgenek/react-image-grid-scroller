import React from "react"

import s from "./Image.module.scss"

interface IProps {
  src: string
  alt?: string
}

export const Image = ({ src, alt = "" }: IProps) => (
  <React.Fragment>
    <span className={s.helper} />
    <img src={src} alt={alt} className={s.image} />
  </React.Fragment>
)
