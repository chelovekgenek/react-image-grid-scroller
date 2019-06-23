import React from "react"

import { Layout } from "components/UI"

import GalleryHeader from "./GalleryHeader"
import GalleryContent from "./GalleryContent"
import GalleryFooter from "./GalleryFooter"

import s from "./Gallery.module.scss"

const { Header, Content } = Layout

export const Gallery: React.FC = () => (
  <Layout>
    <Header className={s.header}>
      <GalleryHeader />
    </Header>
    <Content className={s.content}>
      <GalleryContent />
      <GalleryFooter />
    </Content>
  </Layout>
)
