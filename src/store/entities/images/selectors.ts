import { IReduxState } from "../reducers"

export const getPagination = (state: IReduxState) => state.images.pagination
export const getData = (state: IReduxState) => state.images.data
export const getFetching = (state: IReduxState) => state.images.fetching

export const computeHasMorePages = ({ images }: IReduxState) =>
  images.pagination.page < images.pagination.pages && !images.fetching
