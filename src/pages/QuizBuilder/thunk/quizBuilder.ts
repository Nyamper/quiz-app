import { createAsyncThunk } from '@reduxjs/toolkit';
import { createQuiz } from '../../../api/quizBuilder';
import { toast } from 'react-toastify';

import { Quiz } from '../../../types/types';

const QUIZ_ITEM_CREATE_THUNK_TYPE = 'QUIZ_ITEM_CREATE_THUNK_TYPE ';

export const quizItemCreate = createAsyncThunk(
  QUIZ_ITEM_CREATE_THUNK_TYPE,
  async (quiz: Quiz, { rejectWithValue }) => {
    try {
      return await createQuiz(quiz);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
        return rejectWithValue(error);
      }
      return Promise.reject(error);
    }
  }
);
