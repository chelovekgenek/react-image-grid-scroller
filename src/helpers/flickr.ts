import Flickr from "flickr-sdk"

import { IFlickrRes, IFlickrResBody, IFlickrPhoto, IFlickrReqParams, IFlickrPagination } from "./flickr.types"

const flickr = new Flickr(process.env.REACT_APP_FLICKR_API_KEY!)

// https://www.flickr.com/services/api/misc.urls.html
export const buildPhotoUrl = (payload: IFlickrPhoto) =>
  `https://farm${payload.farm}.staticflickr.com/${payload.server}/${payload.id}_${payload.secret}_m.jpg`

export const getRecentPhotos = (params?: IFlickrReqParams): IFlickrRes<IFlickrResBody> =>
  flickr.photos.getRecent(params)

export const extractPagination = ({ photos: { page, pages, perpage, total } }: IFlickrResBody): IFlickrPagination => ({
  page,
  pages,
  perpage,
  total,
})
