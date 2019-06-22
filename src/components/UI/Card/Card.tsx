import React from "react"
import { Card as AntCard } from "antd"

import s from "./Card.module.scss"
import { CardProps } from "antd/lib/card"

const { Meta } = AntCard

interface IProps {
  cover: CardProps["cover"]
  title: string
}

export const Card: React.FC<IProps> = ({ cover, title }) => (
  <AntCard cover={cover} className={s.container}>
    <Meta title={title} />
  </AntCard>
)
