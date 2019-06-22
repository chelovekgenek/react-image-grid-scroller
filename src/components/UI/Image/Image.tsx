import React from "react"
import IronImage from "react-image-lazy-load-component"

import placeholder from "assets/logo.svg"
import s from "./Image.module.scss"
import "react-image-lazy-load-component/lib/style.css"

interface IProps {
  src: string
  alt?: string
}

export const Image = ({ src, alt = "" }: IProps) => (
  <div className={s.container}>
    <IronImage placeholder={placeholder} src={src} alt={alt} />
  </div>
)
