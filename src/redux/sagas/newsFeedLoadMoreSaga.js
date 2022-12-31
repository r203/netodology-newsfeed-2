import { put, takeLatest, retry} from 'redux-saga/effects';
import {   
  newsFeedLoadMoreRequest,
  newsFeedFailure,
  newsFeedSuccess,
  newsFeedIsEnding 
} from '../newsFeedSlice';
import { getNewsFeedLoadMore } from '../../API/api'

//worker
function* handleNewsFeedLoadMoreRequest(action) {
  try {
    const data = yield retry(3, 100, getNewsFeedLoadMore, action.payload)
    data.length === 5
    ? yield put(newsFeedSuccess(data))
    : yield put(newsFeedIsEnding())
  } catch (e) {
    yield put(newsFeedFailure(e));
  }
}

//watcher
export function* watchNewsFeedLoadMoreRequest() {
    yield takeLatest(newsFeedLoadMoreRequest, handleNewsFeedLoadMoreRequest);
}