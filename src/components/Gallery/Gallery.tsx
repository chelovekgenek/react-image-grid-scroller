import React from "react"
import { connect } from "react-redux"
import InfiniteScroll from "react-infinite-scroller"

import { Layout } from "components/UI"
import { getRecentRequest, getComputedHasMorePages } from "store/entities/images"
import { IReduxState } from "store/entities"

import GalleryHeader from "./GalleryHeader"
import GalleryContent from "./GalleryContent"
import GalleryFooter from "./GalleryFooter"

import s from "./Gallery.module.scss"

const { Header, Content } = Layout

interface IStateProps {
  hasMore: boolean
}
interface IDispatchProps {
  getImages: typeof getRecentRequest
}
interface IProps extends IStateProps, IDispatchProps {}

export const Gallery: React.FC<IProps> = ({ getImages, hasMore }) => (
  <Layout>
    <Header className={s.header}>
      <GalleryHeader />
    </Header>
    <Content className={s.content}>
      <InfiniteScroll loadMore={getImages} hasMore={hasMore}>
        <GalleryContent />
        <GalleryFooter />
      </InfiniteScroll>
    </Content>
  </Layout>
)

export default connect(
  (state: IReduxState) => ({
    hasMore: getComputedHasMorePages(state),
  }),
  {
    getImages: getRecentRequest,
  },
)(Gallery)
