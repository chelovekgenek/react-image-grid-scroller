import { IFlickrNormalizedPhotos, IFlickrPagination } from "helpers"

export interface IGetRecentSuccessPayload {
  data: IFlickrNormalizedPhotos
  pagination: IFlickrPagination
}
