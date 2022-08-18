import { createSlice } from '@reduxjs/toolkit';

import { quizItemFetch, quizItemCorrectAnswersFetch } from '../thunk/quizItem';

import { Quiz, QuizQuestion } from '../../../types/types';

type VerifiedAnswers = {
  question: string;
  chosenAnswer: string;
  correctAnswer: string;
};

type QuizState = {
  loading: boolean;
  error: boolean | null;
  start: boolean;
  questionCurrentIndex: number;
  selectedAnswers: Array<number>;
  data: Quiz;
  questionsState: {
    loading: boolean;
    error: boolean | null;
    questions: QuizQuestion[];
  };
  statisticState: {
    totalQuestions: number;
    correctAnswersCount: number;
    spentTime: number;
    verifiedAnswers: VerifiedAnswers[];
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
  questionsState: {
    loading: true,
    error: null,
    questions: [],
  },
  statisticState: {
    totalQuestions: 0,
    correctAnswersCount: 0,
    spentTime: 0,
    verifiedAnswers: [],
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

    createQuizStatistic: (state, action) => {
      state.statisticState = action.payload;
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
      state.questionsState.loading = true;
      state.questionsState.error = null;
    });
    builder.addCase(quizItemCorrectAnswersFetch.fulfilled, (state, action) => {
      state.questionsState.loading = false;
      state.questionsState.questions = action.payload;
    });
    builder.addCase(quizItemCorrectAnswersFetch.rejected, (state) => {
      state.questionsState.loading = false;
      state.questionsState.error = true;
    });
  },
});

export const {
  quizSelectedAnswers: quizSelectedAnswersAction,
  quizStart: quizStartAction,
  quizStateReset: quizStateResetAction,
  createQuizStatistic: createQuizStatisticAction,
  quizQuestionCurrentIndex: quizQuestionCurrentIndexAction,
} = quizItemSlice.actions;

export default quizItemSlice.reducer;
