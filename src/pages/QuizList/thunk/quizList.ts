import { createAsyncThunk } from '@reduxjs/toolkit';

import { getQuizzes } from '../../../api/quizzes';

const QUIZ_LIST_FETCH_THUNK_TYPE = 'QUIZ_LIST_FETCH_THUNK_TYPE';

export const quizListFetch = createAsyncThunk(
  QUIZ_LIST_FETCH_THUNK_TYPE,
  async (_, { rejectWithValue }) => {
    try {
      return await getQuizzes();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error);
      }
      return Promise.reject(error);
    }
  }
);
