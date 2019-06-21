import React from "react"

import { MainLayout } from "../MainLayout"

import s from "./App.module.scss"

export const App: React.FC = () => {
  return (
    <div className={s.container}>
      <MainLayout />
    </div>
  )
}
