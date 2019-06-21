import { combineReducers, Reducer } from "redux"

import { reducer as images, IState as IStateImages } from "./images"

export interface IReduxState {
  images: IStateImages
}

export const reducers: Reducer<IReduxState> = combineReducers({
  images,
})
