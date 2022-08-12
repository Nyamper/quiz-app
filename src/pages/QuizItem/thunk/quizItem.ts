import { getQuiz } from '../../../api/quizzes';

import { createAsyncThunk } from '@reduxjs/toolkit';

const QUIZ_ITEM_FETCH_THUNK_TYPE = 'QUIZ_ITEM_FETCH_THUNK_TYPE';

export const quizItemFetch = createAsyncThunk(
  QUIZ_ITEM_FETCH_THUNK_TYPE,
  async (_id: string, { rejectWithValue }) => {
    try {
      return await getQuiz(_id);
      //   return async (id: string) => await getQuiz(id);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error);
      }
      return Promise.reject(error);
    }
  }
);
