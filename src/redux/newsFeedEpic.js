import { ofType } from "redux-observable";
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import {
  map,
  // tap,
  switchMap,
  catchError,
  retry
} from 'rxjs/operators';
import {
  newsFeedRequest,
  newsFeedLoadMoreRequest,
  newsFeedFailure,
  newsFeedSuccess,
  newsFeedIsEnding
} from './newsFeedSlice';


export const newsFeedEpic = action$ => action$.pipe(
  ofType(newsFeedRequest),
  switchMap(action => {
    return ajax.getJSON('http://localhost:7070/api/news').pipe(
      retry(3),
      map((response) => newsFeedSuccess(response)),
      catchError(error => of(newsFeedFailure(error)))
    );
  })
)

export const newsFeedLoadMoreEpic = action$ => action$.pipe(
  ofType(newsFeedLoadMoreRequest),
  switchMap(action => {
    return ajax.getJSON(`http://localhost:7070/api/news?lastSeenId=${action.payload}`).pipe(
      map((response) =>
      response.length === 5
      ? newsFeedSuccess(response)
      : newsFeedIsEnding()
      ),
      retry(3),
      catchError(error => of(newsFeedFailure(error)))
    );
  })
)