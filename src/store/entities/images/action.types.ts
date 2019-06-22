import { IFlickrPagination, IFlickrPhoto } from "helpers"

export interface IGetRecentSuccessPayload {
  data: { [key: string]: IFlickrPhoto }
  pagination: IFlickrPagination
}
