import { IFlickrNormalizedPhotos, IFlickrPagination } from "helpers"
import { IBaseAction } from "store"

import { E } from "./actions"

export interface IGetRecentSuccessPayload {
  data: IFlickrNormalizedPhotos
  pagination: IFlickrPagination
}

export interface IGetRecentRequest extends IBaseAction<typeof E.API__GET_RECENT__REQUEST> {}
export interface IGetRecentSuccess extends IBaseAction<typeof E.API__GET_RECENT__SUCCESS, IGetRecentSuccessPayload> {}

export type TActionGetRecentRequest = () => IGetRecentRequest
export type TActionGetRecentSuccess = (payload: IGetRecentSuccessPayload) => IGetRecentSuccess

export type TActions = TActionGetRecentRequest | TActionGetRecentSuccess
