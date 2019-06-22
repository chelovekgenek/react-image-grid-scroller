import { getRecentPhotos, IFlickrReqParams } from "helpers"

export const getRecent = async (params: IFlickrReqParams) => (await getRecentPhotos(params)).body
