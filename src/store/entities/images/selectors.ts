import { IReduxState } from "../reducers"

export const getPagination = (state: IReduxState): IReduxState["images"]["pagination"] => state.images.pagination
export const getData = (state: IReduxState): IReduxState["images"]["data"] => state.images.data
export const getFetching = (state: IReduxState): IReduxState["images"]["fetching"] => state.images.fetching

export const getComputedHasMorePages = ({ images }: IReduxState): boolean =>
  images.pagination.page < images.pagination.pages && !images.fetching

export const getItemsAmount = (state: IReduxState): number => getData(state).allIds.length
