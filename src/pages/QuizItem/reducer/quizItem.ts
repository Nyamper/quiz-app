import { createSlice } from '@reduxjs/toolkit';

import { quizItemFetch, quizItemCorrectAnswersFetch } from '../thunk/quizItem';

import { initialState } from './initialState';

import * as actions from '../actions/quizItem';

const QUIZ_ITEM_SLICE_NAME = 'QUIZ_ITEM_SLICE';

const quizItemSlice = createSlice({
  name: QUIZ_ITEM_SLICE_NAME,
  initialState,
  reducers: {
    quizStart: actions.quizStart,
    quizSelectedAnswers: actions.quizSelectedAnswers,
    quizQuestionCurrentIndex: actions.quizQuestionCurrentIndex,
    quizStateReset: actions.quizStateReset,
    quizStatisticCreate: actions.quizStatisticCreate,
  },

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

    builder.addCase(quizItemCorrectAnswersFetch.pending, (state) => {
      state.correctAnswersState.loading = true;
      state.correctAnswersState.error = null;
    });
    builder.addCase(quizItemCorrectAnswersFetch.fulfilled, (state, action) => {
      state.correctAnswersState.loading = false;
      state.correctAnswersState.questions = action.payload;
    });
    builder.addCase(quizItemCorrectAnswersFetch.rejected, (state) => {
      state.correctAnswersState.loading = false;
      state.correctAnswersState.error = true;
    });
  },
});

export const {
  quizStart: quizStartAction,
  quizStateReset: quizStateResetAction,
  quizSelectedAnswers: quizSelectedAnswersAction,
  quizStatisticCreate: quizStatisticCreateAction,
  quizQuestionCurrentIndex: quizQuestionCurrentIndexAction,
} = quizItemSlice.actions;

export default quizItemSlice.reducer;
