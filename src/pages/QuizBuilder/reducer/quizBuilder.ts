import { createSlice } from '@reduxjs/toolkit';

import { Quiz } from '../../../types/types';

const initialState: Quiz = {
  category: '',
  quizName: '',
  description: '',
  cardImageUrl: '',
  questions: [
    {
      question: '',
      answers: ['', '', '', ''],
      correctAnswer: '',
    },
  ],
};

const QUIZ_BUILDER_SLICE_NAME = 'QUIZ_BUILDER_SLICE';

const quizBuilderSlice = createSlice({
  name: QUIZ_BUILDER_SLICE_NAME,
  initialState,
  reducers: {
    setQuiz: (state, action) => {
      state = action.payload;
    },

    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
  },
});

export const { addQuestion: addQuestionAction } = quizBuilderSlice.actions;

export default quizBuilderSlice.reducer;
