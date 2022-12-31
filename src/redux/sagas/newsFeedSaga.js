import { put, takeLatest, retry} from 'redux-saga/effects';
import {   
  newsFeedRequest,
  newsFeedFailure,
  newsFeedSuccess,
} from '../newsFeedSlice';
import { getNewsFeed } from '../../API/api'

//worker
function* handleNewsFeedRequest(action) {
  try {
    const data = yield retry(3, 100, getNewsFeed)
    yield put(newsFeedSuccess(data));
  } catch (e) {
    yield put(newsFeedFailure(e));
  }
}

//watcher
export function* watchNewsFeedRequest() {
    yield takeLatest(newsFeedRequest, handleNewsFeedRequest);
}