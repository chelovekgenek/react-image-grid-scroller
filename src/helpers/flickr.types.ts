export interface IFlickrReqParams {
  page?: number
  perpage?: number
}

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

export interface IFlickrResBody {
  photos: {
    photo: Array<IFlickrPhoto>
  } & IFlickrPagination
  stat: "ok"
}

export interface IFlickrRes<T> {
  body: T
}

export interface IFlickrNormalizedPhotos {
  byId: {
    [key: string]: IFlickrPhoto
  }
  allIds: Array<string>
}
