import { QuizState } from '../reducer/types';
import { initialState } from '../reducer/initialState';
import { PayloadAction } from '@reduxjs/toolkit';
import { Statistic } from '../../../types/types';

export const quizStart = (state: QuizState) => {
  state.start = true;
};

export const quizSelectedAnswers = (
  state: QuizState,
  action: PayloadAction<string>
) => {
  state.selectedAnswers.push(action.payload);
};

export const quizQuestionCurrentIndex = (state: QuizState) => {
  state.questionCurrentIndex = state.questionCurrentIndex + 1;
};

export const quizStateReset = (state: QuizState) => {
  state.questionCurrentIndex = 0;
  state.selectedAnswers = [];
  state.start = false;
  state.correctAnswersState = initialState.correctAnswersState;
};

export const quizStatisticCreate = (
  state: QuizState,
  action: PayloadAction<Statistic>
) => {
  state.statisticState = action.payload;
};
