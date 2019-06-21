export interface IFlickrPhoto {
  id: string
  title: string
  owner: string
  secret: string
  server: string
  farm: number
}

export interface IFlickrPagination {
  page: number
  pages: number
  perpage: number
  total: number
}

export interface IFlickrResponseBody {
  photos: {
    photo: Array<IFlickrPhoto>
  } & IFlickrPagination
  stat: "ok"
}

export interface IFlickrResponse<T> {
  body: T
}

export interface IFlickrNormalizedPhotos {
  byId: {
    [key: string]: IFlickrPhoto
  }
  allIds: Array<string>
}
