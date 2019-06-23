import { times } from "lodash"
import { IFlickrResBody } from "helpers"
import { IActionGetRecentSuccess } from "./action.types"

export const extractGetRecentData = (
  data: IFlickrResBody,
  copyTimes = 1,
): IActionGetRecentSuccess["payload"]["data"] => {
  const result: IActionGetRecentSuccess["payload"]["data"] = {}
  times(copyTimes, num => {
    for (const photo of data.photos.photo) {
      result[`${num + 1}_${photo.id}`] = photo
    }
  })

  return result
}
