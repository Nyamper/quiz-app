import { createSlice } from '@reduxjs/toolkit';
import { QuizzesState } from '../../../types/types';

import { quizListFetch } from '../thunk/quizList';

const initialState: QuizzesState = {
  loading: true,
  error: null,
  data: [],
};

const QUIZ_LIST_SLICE_NAME = 'QUIZ_LIST_SLICE';

const quizListSlice = createSlice({
  name: QUIZ_LIST_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(quizListFetch.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(quizListFetch.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(quizListFetch.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default quizListSlice.reducer;
