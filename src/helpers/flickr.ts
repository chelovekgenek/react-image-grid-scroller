import Flickr from "flickr-sdk"

import { IFlickrResponse, IFlickrResponseBody, IFlickrPhoto } from "./flickr.types"

const flickr = new Flickr(process.env.REACT_APP_FLICKR_API_KEY!)

// https://www.flickr.com/services/api/misc.urls.html
export const buildPhotoUrl = (payload: IFlickrPhoto) =>
  `https://farm${payload.farm}.staticflickr.com/${payload.server}/${payload.id}_${payload.secret}.jpg`

export const getRecentPhotos = (): IFlickrResponse<IFlickrResponseBody> => flickr.photos.getRecent()
