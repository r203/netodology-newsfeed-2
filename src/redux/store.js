import { configureStore } from '@reduxjs/toolkit';
import newsFeedReducer from './newsFeedSlice'
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { newsFeedEpic, newsFeedLoadMoreEpic } from './newsFeedEpic';


const epicMiddleware = createEpicMiddleware();
const epic = combineEpics(
  newsFeedEpic,
  newsFeedLoadMoreEpic,
)

export const store = configureStore({
  reducer: {
    newsFeed: newsFeedReducer,
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic);
export default store;