import { createAsyncThunk } from '@reduxjs/toolkit';
import { createQuiz } from '../../../api/quizzes';

import { Quiz } from '../../../types/types';

export const createQuizAsync = createAsyncThunk(
  'quiz/createQuiz',
  async (quiz: Quiz) => {
    const response = await createQuiz(quiz);
    return response;
  }
);
