import { merge, union } from "lodash/fp"
import { handleActions } from "redux-actions"
import { assign } from "lodash/fp"

import { IFlickrPagination, IFlickrNormalizedPhotos } from "helpers"

import { E } from "./actions"

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
    perpage: 100,
    total: 0,
  },
}

export const reducer = handleActions(
  {
    [E.API__GET_RECENT__REQUEST]: state =>
      assign(state, {
        fetching: true,
      }),
    [E.API__GET_RECENT__SUCCESS]: (state, { payload }) =>
      assign(state, {
        fetching: false,
        pagination: payload.pagination,
        data: {
          byId: merge(state.data.byId, payload.data.byId),
          allIds: union(state.data.allIds, payload.data.allIds),
        },
      }),
  },
  initialState,
)
