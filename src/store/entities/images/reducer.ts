import { assign } from "lodash/fp"

import { IBaseAction } from "store/store.types"
import { IFlickrPagination, IFlickrNormalizedPhotos } from "helpers"

import { E } from "./actions"
import { TActions } from "./action.types"

export interface IState {
  fetching: boolean
  data: IFlickrNormalizedPhotos
  pagination: IFlickrPagination
}

const initialState: IState = {
  fetching: false,
  data: { byId: {}, allIds: [] },
  pagination: {
    page: 0,
    pages: 0,
    perpage: 0,
    total: 0,
  },
}
export const reducer = (state: IState = initialState, action: IBaseAction<E, TActions>): IState => {
  switch (action.type) {
    case E.API__GET_RECENT__REQUEST:
      return assign(state, {
        fetching: true,
      })
    case E.API__GET_RECENT__SUCCESS:
      return assign(state, {
        fetching: false,
        ...action.payload,
      })

    default:
      return state
  }
}
