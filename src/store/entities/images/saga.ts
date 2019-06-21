import { takeEvery } from "redux-saga/effects";

function* handleAny() {
  return console.log("privet");
}

export function* watcher() {
  yield takeEvery("privet", handleAny);
}
