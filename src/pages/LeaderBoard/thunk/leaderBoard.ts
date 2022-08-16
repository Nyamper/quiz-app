import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLeaderBoard, postLeaderBoard } from '../../../api/quizzes';

import { LeaderBoard } from '../../../types/types';

const QUIZ_LEADERBOARD_FETCH_THUNK_TYPE = 'QUIZ_LEADERBOARD_FETCH_THUNK_TYPE';

export const leaderBoardFetch = createAsyncThunk(
  QUIZ_LEADERBOARD_FETCH_THUNK_TYPE,
  async (_, { rejectWithValue }) => {
    try {
      return await getLeaderBoard();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error);
      }
      return Promise.reject(error);
    }
  }
);

const QUIZ_LEADERBOARD_POST_THUNK_TYPE = 'QUIZ_LEADERBOARD_POST_THUNK_TYPE';

export const leaderBoardPost = createAsyncThunk(
  QUIZ_LEADERBOARD_POST_THUNK_TYPE,
  async (data: LeaderBoard, { rejectWithValue }) => {
    try {
      return await postLeaderBoard(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error);
      }
      return Promise.reject(error);
    }
  }
);
