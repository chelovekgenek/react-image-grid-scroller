import { takeEvery, call, put, select } from "redux-saga/effects"

import { extractPagination, normalizePhotos, IFlickrResBody, IFlickrReqParams } from "helpers"

import * as api from "./api"
import { E, getRecentSuccess } from "./actions"
import { getPagination } from "./selectors"
import { IState } from "./reducer"

function* handleGetRecent() {
  try {
    const { page, perpage, pages }: IState["pagination"] = yield select(getPagination)

    let params: IFlickrReqParams = { perpage }
    if (page < pages) {
      params.page = page + 1
    }

    const images: IFlickrResBody = yield call(api.getRecent, params)
    const pagination = yield call(extractPagination, images.photos)
    const data = yield call(normalizePhotos, images)
    yield put(getRecentSuccess({ pagination, data }))
  } catch (e) {
    console.error(e)
  }
}

export function* watcher() {
  yield takeEvery(E.API__GET_RECENT__REQUEST, handleGetRecent)
}
