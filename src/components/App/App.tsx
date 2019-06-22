import React from "react"

import { Gallery } from "components/Gallery"

import s from "./App.module.scss"

export const App: React.FC = () => (
  <div className={s.container}>
    <Gallery />
  </div>
)
