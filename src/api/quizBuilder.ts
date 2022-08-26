import client from './client';
import { Quiz } from '../types/types';

export const createQuiz = async (quiz: Quiz) => {
  try {
    return await client.post<never, Quiz>('/quiz', quiz);
  } catch (error) {
    return Promise.reject(error);
  }
};
