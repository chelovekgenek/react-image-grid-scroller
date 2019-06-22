import React from "react"

import { MainLayout } from "components/MainLayout"

import s from "./App.module.scss"

export const App: React.FC = () => (
  <div className={s.container}>
    <MainLayout />
  </div>
)
