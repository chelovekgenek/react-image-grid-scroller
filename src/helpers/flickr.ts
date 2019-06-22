import Flickr from "flickr-sdk"

import { IFlickrRes, IFlickrResBody, IFlickrPhoto, IFlickrReqParams } from "./flickr.types"

const flickr = new Flickr(process.env.REACT_APP_FLICKR_API_KEY!)

// https://www.flickr.com/services/api/misc.urls.html
export const buildPhotoUrl = (payload: IFlickrPhoto) =>
  `https://farm${payload.farm}.staticflickr.com/${payload.server}/${payload.id}_${payload.secret}_n.jpg`

export const getRecentPhotos = (params?: IFlickrReqParams): IFlickrRes<IFlickrResBody> =>
  flickr.photos.getRecent(params)
