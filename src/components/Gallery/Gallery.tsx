import React from "react"
import { connect } from "react-redux"
import InfiniteScroll from "react-infinite-scroller"

import { getRecentRequest, computeHasMorePages } from "store/entities/images"
import { IReduxState } from "store/entities"

import GalleryContent from "./GalleryContent"
import GalleryFooter from "./GalleryFooter"

interface IStateProps {
  hasMore: boolean
}
interface IDispatchProps {
  getImages: typeof getRecentRequest
}
interface IProps extends IStateProps, IDispatchProps {}

export const Gallery: React.FC<IProps> = ({ getImages, hasMore }) => (
  <InfiniteScroll loadMore={getImages} hasMore={hasMore}>
    <GalleryContent />
    <GalleryFooter />
  </InfiniteScroll>
)

export default connect(
  (state: IReduxState) => ({
    hasMore: computeHasMorePages(state),
  }),
  {
    getImages: getRecentRequest,
  },
)(Gallery)
