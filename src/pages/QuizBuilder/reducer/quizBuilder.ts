import { createSlice } from '@reduxjs/toolkit';

import * as actions from '../actions/quizBuilder';

import { initialState } from '../initialState';

const QUIZ_BUILDER_SLICE_NAME = 'QUIZ_BUILDER_SLICE';

const quizBuilderSlice = createSlice({
  name: QUIZ_BUILDER_SLICE_NAME,
  initialState,
  reducers: {
    quizCreateInProgress: actions.quizCreateInProgress,
    quizCreateSuccess: actions.quizCreateSuccess,
    quizCreateError: actions.quizCreateError,
    quizBuildComplete: actions.quizBuildComplete,
    quizAddQuestion: actions.quizAddQuestion,
  },
});

export const {
  quizAddQuestion: quizAddQuestionAction,
  quizBuildComplete: quizBuildCompleteAction,
  quizCreateInProgress: quizCreateInProgressAction,
  quizCreateSuccess: quizCreateSuccessAction,
  quizCreateError: quizCreateErrorAction,
} = quizBuilderSlice.actions;

export default quizBuilderSlice.reducer;
