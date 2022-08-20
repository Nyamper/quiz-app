import { Quiz, QuizQuestion, Statistic } from '../../../types/types';

export type QuizState = {
  loading: boolean;
  error: boolean | null;
  start: boolean;
  questionCurrentIndex: number;
  selectedAnswers: Array<string>;
  data: Quiz;
  correctAnswersState: {
    loading: boolean;
    error: boolean | null;
    questions: QuizQuestion[];
  };
  statisticState: Statistic;
};
