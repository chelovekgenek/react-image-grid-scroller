import React from "react"
import { Card as AntCard } from "antd"
import cn from "classnames"

import { CardProps } from "antd/lib/card"

import s from "./Card.module.scss"

const { Meta } = AntCard

interface IProps {
  cover: CardProps["cover"]
  className?: string
  title: string
}

export const Card: React.FC<IProps> = ({ cover, title, className }) => (
  <AntCard cover={cover} className={cn(s.container, className)}>
    <Meta title={title} />
  </AntCard>
)
