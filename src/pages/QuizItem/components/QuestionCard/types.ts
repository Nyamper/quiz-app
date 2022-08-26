import { QuizQuestion } from '../../../../types/types';

export type CardProps = {
  question: QuizQuestion;
  getAnswer: Function;
};
