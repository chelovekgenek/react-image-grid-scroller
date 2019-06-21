import { IFlickrResponseBody, IFlickrPagination, IFlickrNormalizedPhotos } from "./flickr.types"

export const extractPagination = ({
  page,
  pages,
  perpage,
  total,
}: IFlickrResponseBody["photos"]): IFlickrPagination => ({
  page,
  pages,
  perpage,
  total,
})

export const normalizePhotos = (data: IFlickrResponseBody): IFlickrNormalizedPhotos => {
  const result: IFlickrNormalizedPhotos = {
    allIds: [],
    byId: {},
  }
  for (const photo of data.photos.photo) {
    result.allIds.push(photo.id)
    result.byId[photo.id] = photo
  }

  return result
}
