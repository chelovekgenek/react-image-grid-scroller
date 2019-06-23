import { takeEvery, call, put, select } from "redux-saga/effects"

import { extractPagination, IFlickrResBody, IFlickrReqParams } from "helpers"

import * as api from "./api"
import { E, getRecentSuccess } from "./actions"
import { getPagination } from "./selectors"
import { IState } from "./reducer"
import { extractGetRecentData } from "./action.helpers"

function* handleGetRecent() {
  try {
    const { page, perpage, pages }: IState["pagination"] = yield select(getPagination)

    let params: IFlickrReqParams = { per_page: perpage }
    if (page < pages) {
      params.page = page + 1
    }

    const images: IFlickrResBody = yield call(api.getRecent, params)
    const pagination = yield call(extractPagination, images)
    const data = yield call(extractGetRecentData, images, 11)

    yield put(getRecentSuccess({ pagination, data }))
  } catch (e) {
    console.error(e)
  }
}

export function* watcher() {
  yield takeEvery(E.API__GET_RECENT__REQUEST, handleGetRecent)
}
