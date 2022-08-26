import client from './client';
import { LeaderBoard, LeaderBoardPartial } from '../types/types';

export const postLeaderBoard = async (leaderBoard: LeaderBoardPartial) => {
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
