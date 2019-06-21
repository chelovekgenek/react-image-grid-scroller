import { TActionGetRecentRequest, TActionGetRecentSuccess, IGetRecentSuccessPayload } from "./action.types"

export enum E {
  API__GET_RECENT__REQUEST = "images/api/getRecent/request",
  API__GET_RECENT__SUCCESS = "images/api/getRecent/success",
  API__GET_RECENT__FAILURE = "images/api/getRecent/failure",
}

export const getRecentRequest: TActionGetRecentRequest = () => ({
  type: E.API__GET_RECENT__REQUEST,
})
export const getRecentSuccess: TActionGetRecentSuccess = (payload: IGetRecentSuccessPayload) => ({
  type: E.API__GET_RECENT__SUCCESS,
  payload,
})
