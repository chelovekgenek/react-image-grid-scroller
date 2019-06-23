import { IGetRecentSuccessPayload } from "./action.types"
import { createAction } from "redux-actions"

export enum E {
  API__GET_RECENT__REQUEST = "images/api/getRecent/request",
  API__GET_RECENT__SUCCESS = "images/api/getRecent/success",
  API__GET_RECENT__FAILURE = "images/api/getRecent/failure",
}

export const getRecentRequest = createAction(E.API__GET_RECENT__REQUEST)
export const getRecentFailure = createAction(E.API__GET_RECENT__FAILURE)
export const getRecentSuccess = createAction<IGetRecentSuccessPayload>(E.API__GET_RECENT__SUCCESS)
