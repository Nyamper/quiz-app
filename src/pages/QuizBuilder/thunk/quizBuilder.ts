import { createAsyncThunk } from '@reduxjs/toolkit';
import { createQuiz } from '../../../api/quizzes';

import { Quiz } from '../../../types/types';

const QUIZ_LIST_CREATE_THUNK_TYPE = 'QUIZ_LIST_CREATE_THUNK_TYPE ';

export const createQuizAsync = createAsyncThunk(
  QUIZ_LIST_CREATE_THUNK_TYPE,
  async (quiz: Quiz) => {
    const response = await createQuiz(quiz);
    return response;
  }
);
