import React from "react"
import { connect } from "react-redux"
import InfiniteScroll from "react-infinite-scroller"

import { getRecentRequest } from "store/entities/images"

import { MainLayout } from "../MainLayout"

import { IReduxState } from "store/entities"
import { getPagination } from "store/entities/images"

import s from "./App.module.scss"

interface IStateProps {
  pagination: IReduxState["images"]["pagination"]
}
interface IDispatchProps {
  getImages: typeof getRecentRequest
}
interface IProps extends IStateProps, IDispatchProps {}

export const App: React.FC<IProps> = ({ getImages, pagination: { page, pages } }) => (
  <div className={s.container}>
    <InfiniteScroll loadMore={getImages} hasMore={page <= pages}>
      <MainLayout />
    </InfiniteScroll>
  </div>
)

export default connect(
  (state: IReduxState) => ({
    pagination: getPagination(state),
  }),
  {
    getImages: getRecentRequest,
  },
)(App)
