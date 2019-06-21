// import { assign } from "lodash/fp"

import { IBaseAction } from "types/store";

interface IState {
  fetching: boolean;
  data: Array<object>;
}
const initialState: IState = {
  fetching: true,
  data: []
};
export const reducer = (state: IState = initialState, action: IBaseAction) => {
  //   switch (action.type) {
  //     case "*":
  //       return assign(state, {
  //         fetching: true,
  //       })

  //     default:
  //       return state
  //   }
  return state;
};
