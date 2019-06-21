import { takeEvery, call, put } from "redux-saga/effects"

import { extractPagination, normalizePhotos, IFlickrResponseBody } from "helpers"

import * as api from "./api"
import { E, getRecentSuccess } from "./actions"

function* handleGetRecent() {
  try {
    const images: IFlickrResponseBody = yield call(api.getRecent)
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
