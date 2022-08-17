import client from './client';
import { QuizPartial, Quiz, LeaderBoard, QuizQuestion } from '../types/types';

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

export const createQuiz = async (quiz: Quiz) => {
  try {
    return await client.post<never, Quiz>('/quiz', quiz);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postLeaderBoard = async (leaderBoard: LeaderBoard) => {
  try {
    return await client.post<never, LeaderBoard>('/leaderboard', leaderBoard);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getLeaderBoard = async () => {
  try {
    return await client.get<never, LeaderBoard[]>('/leaderboard');
  } catch (error) {
    return Promise.reject(error);
  }
};
