import * as React from "react"
import { connect } from "react-redux"
import InfiniteScroll from "react-infinite-scroller"

import { IReduxState } from "store/entities"

import { getRecentRequest, computeHasMorePages } from "store/entities/images"
import { Gallery } from "components/Gallery"

interface IStateProps {
  hasMore: boolean
}
interface IDispatchProps {
  getImages: typeof getRecentRequest
}
interface IProps extends IStateProps, IDispatchProps {}

export const MainLayout: React.FC<IProps> = ({ getImages, hasMore }) => (
  <InfiniteScroll loadMore={getImages} hasMore={hasMore}>
    <Gallery />
  </InfiniteScroll>
)

export default connect(
  (state: IReduxState) => ({
    hasMore: computeHasMorePages(state),
  }),
  {
    getImages: getRecentRequest,
  },
)(MainLayout)
