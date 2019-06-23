import { IFlickrPagination, IFlickrPhoto } from "helpers"
import { Action } from "redux-actions"

export interface IGetRecentSuccessPayload {
  data: { [key: string]: IFlickrPhoto }
  pagination: IFlickrPagination
}

export interface IActionGetRecentSuccess extends Action<IGetRecentSuccessPayload> {}
