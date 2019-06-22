import React from "react"
import { connect } from "react-redux"
import InfiniteScroll from "react-infinite-scroller"

import { getRecentRequest, computeHasMorePages } from "store/entities/images"

import { MainLayout } from "../MainLayout"

import { IReduxState } from "store/entities"

import s from "./App.module.scss"

interface IStateProps {
  hasMore: boolean
}
interface IDispatchProps {
  getImages: typeof getRecentRequest
}
interface IProps extends IStateProps, IDispatchProps {}

export class App extends React.PureComponent<IProps> {
  componentDidMount() {
    this.props.getImages()
  }
  render() {
    const { getImages, hasMore } = this.props
    return (
      <div className={s.container}>
        <InfiniteScroll loadMore={getImages} hasMore={hasMore} initialLoad={false}>
          <MainLayout />
        </InfiniteScroll>
      </div>
    )
  }
}

export default connect(
  (state: IReduxState) => ({
    hasMore: computeHasMorePages(state),
  }),
  {
    getImages: getRecentRequest,
  },
)(App)
