import client from './client';
import { QuizPartial, Quiz } from '../types/types';

export const getQuizzes = async () => {
  return await client.get<never, QuizPartial[]>('/quiz');
};

export const getQuiz = async (id: string) => {
  return await client.get<never, Quiz>(`/quiz/${id}`);
};