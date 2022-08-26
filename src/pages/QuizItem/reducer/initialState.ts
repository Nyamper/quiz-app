import { QuizState } from './types';

export const initialState: QuizState = {
  loading: true,
  error: null,
  start: false,
  questionCurrentIndex: 0,
  selectedAnswers: [],
  data: {
    id: '',
    category: '',
    quizName: '',
    description: '',
    cardImageUrl: 'string',
    questions: [],
  },
  correctAnswersState: {
    loading: false,
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
