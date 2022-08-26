import client from './client';
import { QuizPartial, Quiz, QuizQuestion } from '../types/types';

export const getQuizzes = async () => {
  try {
    return await client.get<never, QuizPartial[]>('/quiz');
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getQuiz = async (id: string) => {
  try {
    const response = await client.get<never, Quiz>(`/quiz/${id}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getQuizCorrectAnswers = async (id: string) => {
  try {
    const response = await client.get<never, QuizQuestion[]>(
      `/quiz/answers/${id}`
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
