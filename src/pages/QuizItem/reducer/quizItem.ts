import { createSlice } from '@reduxjs/toolkit';

import { quizItemFetch, quizItemCorrectAnswersFetch } from '../thunk/quizItem';

import { Quiz, QuizQuestion } from '../../../types/types';

type QuizState = {
  loading: boolean;
  error: boolean | null;
  start: boolean;
  questionCurrentIndex: number;
  selectedAnswers: Array<number>;
  data: Quiz;
  correctAnswersState: {
    loading: boolean;
    error: boolean | null;
    data: QuizQuestion[];
  };
};

const initialState: QuizState = {
  loading: true,
  error: null,
  start: false,
  questionCurrentIndex: 0,
  selectedAnswers: [],
  data: {
    _id: '',
    category: '',
    quizName: '',
    description: '',
    cardImageUrl: 'string',
    questions: [],
  },
  correctAnswersState: {
    loading: true,
    error: null,
    data: [],
  },
};

const QUIZ_ITEM_SLICE_NAME = 'QUIZ_ITEM_SLICE';

const quizItemSlice = createSlice({
  name: QUIZ_ITEM_SLICE_NAME,
  initialState,
  reducers: {
    quizStart: (state) => {
      state.start = true;
    },

    quizSelectedAnswers: (state, action) => {
      state.selectedAnswers.push(action.payload);
    },

    quizQuestionCurrentIndex: (state) => {
      state.questionCurrentIndex = state.questionCurrentIndex + 1;
    },

    quizStateReset: (state) => {
      state.questionCurrentIndex = 0;
      state.selectedAnswers = [];
      state.start = false;
    },
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
      state.correctAnswersState.data = action.payload;
    });
    builder.addCase(quizItemCorrectAnswersFetch.rejected, (state) => {
      state.correctAnswersState.loading = false;
      state.correctAnswersState.error = true;
    });
  },
});

export const {
  quizSelectedAnswers: quizSelectedAnswersAction,
  quizQuestionCurrentIndex: quizQuestionCurrentIndexAction,
  quizStart: quizStartAction,
  quizStateReset: quizStateResetAction,
} = quizItemSlice.actions;

export default quizItemSlice.reducer;
