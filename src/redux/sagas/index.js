import { spawn} from 'redux-saga/effects';
import {watchNewsFeedRequest} from './newsFeedSaga';
import {watchNewsFeedLoadMoreRequest} from './newsFeedLoadMoreSaga';

export default function* rootSaga() {
  yield spawn(watchNewsFeedRequest);
  yield spawn(watchNewsFeedLoadMoreRequest);
}

