import { merge, assign } from "lodash/fp"
import { handleActions } from "redux-actions"

import { IFlickrPagination, IFlickrNormalizedPhotos } from "helpers"

import { E } from "./actions"
import { IActionGetRecentSuccess } from "./action.types"

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
    pages: 1,
    perpage: 10,
    total: 0,
  },
}

export const reducer = handleActions(
  {
    [E.API__GET_RECENT__REQUEST]: state =>
      assign(state, {
        fetching: true,
      }),
    [E.API__GET_RECENT__SUCCESS]: (state, { payload }: IActionGetRecentSuccess) => {
      const nextIds = merge(state.data.byId, payload.data)
      return assign(state, {
        fetching: false,
        pagination: payload.pagination,
        data: {
          byId: nextIds,
          allIds: Object.keys(nextIds),
        },
      })
    },
  },
  initialState,
)
