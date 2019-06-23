import { getRecentRequest } from "./entities/images"
import { Dispatch } from "redux"

export default (dispatch: Dispatch) =>
  new Promise(() => {
    dispatch(getRecentRequest())
  })
