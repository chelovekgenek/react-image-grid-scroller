import { IFlickrResBody } from "helpers"
import { IGetRecentSuccessPayload } from "./action.types"

export const extractGetRecentData = (data: IFlickrResBody): IGetRecentSuccessPayload["data"] => {
  const result: IGetRecentSuccessPayload["data"] = {}
  for (const photo of data.photos.photo) {
    result[photo.id] = photo
  }

  return result
}
