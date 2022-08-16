import { createSlice } from '@reduxjs/toolkit';

import { LeaderBoardState } from '../../../types/types';

import { leaderBoardFetch } from '../thunk/leaderBoard';

const initialState: LeaderBoardState = {
  loading: true,
  error: null,
  data: [],
};

const LEADERBOARD_SLICE_NAME = 'LEADERBOARD_SLICE';

const leaderBoardSlice = createSlice({
  name: LEADERBOARD_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(leaderBoardFetch.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(leaderBoardFetch.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(leaderBoardFetch.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export default leaderBoardSlice.reducer;
