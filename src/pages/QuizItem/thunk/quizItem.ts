import { getQuiz, getQuizCorrectAnswers } from '../../../api/quizzes';

import { createAsyncThunk } from '@reduxjs/toolkit';

const QUIZ_ITEM_FETCH_THUNK_TYPE = 'QUIZ_ITEM_FETCH_THUNK_TYPE';

export const quizItemFetch = createAsyncThunk(
  QUIZ_ITEM_FETCH_THUNK_TYPE,
  async (_id: string, { rejectWithValue }) => {
    try {
      return await getQuiz(_id);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error);
      }
      return Promise.reject(error);
    }
  }
);

const QUIZ_ITEM_CORRECT_ANSWERS_FETCH_THUNK_TYPE =
  'QUIZ_ITEM_CORRECT_ANSWERS_FETCH_THUNK_TYPE';

export const quizItemCorrectAnswersFetch = createAsyncThunk(
  QUIZ_ITEM_CORRECT_ANSWERS_FETCH_THUNK_TYPE,
  async (_id: string, { rejectWithValue }) => {
    try {
      return await getQuizCorrectAnswers(_id);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error);
      }
      return Promise.reject(error);
    }
  }
);
