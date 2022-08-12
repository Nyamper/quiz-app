import { createSlice } from '@reduxjs/toolkit';

import { quizItemFetch } from '../thunk/quizItem';

import { QuizState } from '../../../types/types';

const initialState: QuizState = {
  loading: true,
  error: null,
  data: {
    _id: '',
    category: '',
    quizName: '',
    description: '',
    cardImageUrl: 'string',
    questions: [],
  },
};

const QUIZ_ITEM_SLICE_NAME = 'QUIZ_ITEM_SLICE';

const quizItemSlice = createSlice({
  name: QUIZ_ITEM_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(quizItemFetch.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(quizItemFetch.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(quizItemFetch.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default quizItemSlice.reducer;
