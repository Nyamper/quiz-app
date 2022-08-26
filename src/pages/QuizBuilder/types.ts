import { Quiz } from '../../types/types';

export type QuizBuilderState = {
  loading: boolean;
  error: string | null;
  data: Quiz;
};
