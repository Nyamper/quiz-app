import { PayloadAction } from '@reduxjs/toolkit';
import { QuizBuilderState } from '../types';
import { Quiz, QuizQuestion } from '../../../types/types';

export const quizCreateInProgress = (state: QuizBuilderState) => {
  state.loading = true;
};
export const quizCreateSuccess = (state: QuizBuilderState) => {
  state.loading = false;
};
export const quizCreateError = (state: QuizBuilderState) => {
  state.loading = false;
};

export const quizBuildComplete = (
  state: QuizBuilderState,
  action: PayloadAction<Quiz>
) => {
  state.data.category = action.payload.category;
  state.data.quizName = action.payload.quizName;
  state.data.description = action.payload.description;
};

export const quizAddQuestion = (
  state: QuizBuilderState,
  action: PayloadAction<QuizQuestion>
) => {
  state.data.questions.push(action.payload);
};
