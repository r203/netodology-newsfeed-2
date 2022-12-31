import { configureStore } from '@reduxjs/toolkit';
import newsFeedReducer from './newsFeedSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/index.js";
// import { combineEpics, createEpicMiddleware } from 'redux-observable';
// import { newsFeedEpic, newsFeedLoadMoreEpic } from './newsFeedEpic';


// const epicMiddleware = createEpicMiddleware();
// const epic = combineEpics(
  // newsFeedEpic,
  // newsFeedLoadMoreEpic,
// )

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    newsFeed: newsFeedReducer,
  },
  middleware: [sagaMiddleware]
});

// epicMiddleware.run(epic);
sagaMiddleware.run(rootSaga);
export default store;