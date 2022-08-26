import { QuizBuilderState } from './types';

export const initialState: QuizBuilderState = {
  loading: true,
  error: null,
  data: {
    category: '',
    quizName: '',
    description: '',
    cardImageUrl: '',
    questions: [],
  },
};
