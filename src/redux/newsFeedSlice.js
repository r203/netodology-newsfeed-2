import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newsFeed: [],
  loading: false,
  error: null,
  lastId: null,
  isEnding: false,
};

export const newsFeedSlice = createSlice({
  name: 'newsFeed',
  initialState,
  reducers: {
    newsFeedRequest(state, action) {
      state.newsFeed = [];
      state.loading = true;
      state.error = null;
    },

    newsFeedLoadMoreRequest(state, action) {
      state.loading = true;
      state.error = null;
    },

    newsFeedFailure(state, action) {
      // state.newsFeed = [];
      state.loading = false;
      state.error = action.payload;
    },

    newsFeedSuccess(state, action) {
      state.newsFeed = state.newsFeed.concat(action.payload)
      state.loading = false;
      state.error = null;
      state.lastId = action.payload[action.payload.length - 1].id;
    },

    newsFeedIsEnding(state, action) {
      state.isEnding = true;
      state.loading = false;
      state.error = null;
    },
  },

});

export const { newsFeedRequest, newsFeedFailure, newsFeedSuccess, newsFeedLoadMoreRequest,newsFeedIsEnding } = newsFeedSlice.actions;


export default newsFeedSlice.reducer;
