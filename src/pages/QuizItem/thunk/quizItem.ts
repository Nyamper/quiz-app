import { getQuiz, getQuizCorrectAnswers } from '../../../api/quizzes';
import { leaderBoardPost } from '../../LeaderBoard/thunk/leaderBoard';

import { quizStatisticCreateAction } from '../reducer/quizItem';

import { modalOpenToggleAction } from '../../../store/modal/reducer/modal';
import { RootState } from '../../../store/index';

import { toast } from 'react-toastify';

import { createAsyncThunk } from '@reduxjs/toolkit';

type Payload = {
  id: string;
  spentTime: number;
};

const QUIZ_ITEM_FETCH_THUNK_TYPE = 'QUIZ_ITEM_FETCH_THUNK_TYPE';

export const quizItemFetch = createAsyncThunk(
  QUIZ_ITEM_FETCH_THUNK_TYPE,
  async (_id: string, { rejectWithValue }) => {
    try {
      return await getQuiz(_id);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
        return rejectWithValue(error);
      }
      return Promise.reject(error);
    }
  }
);

const QUIZ_ITEM_CORRECT_ANSWERS_FETCH_THUNK_TYPE =
  'QUIZ_ITEM_CORRECT_ANSWERS_FETCH_THUNK_TYPE';

export const quizItemCorrectAnswersFetch = createAsyncThunk(
  QUIZ_ITEM_CORRECT_ANSWERS_FETCH_THUNK_TYPE,
  async (_id: string, { rejectWithValue }) => {
    try {
      return await getQuizCorrectAnswers(_id);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
        return rejectWithValue(error);
      }
      return Promise.reject(error);
    }
  }
);

const QUIZ_ITEM_STATISTIC_CREATE_START_TYPE =
  'QUIZ_ITEM_STATISTIC_CREATE_START_TYPE';
export const quizItemStatisticCreateStart = createAsyncThunk(
  QUIZ_ITEM_STATISTIC_CREATE_START_TYPE,
  async (payload: Payload, { dispatch, getState, rejectWithValue }) => {
    try {
      await dispatch(quizItemCorrectAnswersFetch(payload.id));
      const state = getState() as RootState;
      const { questions } = state.quizItem.data;

      const makeStatistic = () => {
        const totalQuestions = questions.length;
        const selectedAnswers = state.quizItem.selectedAnswers;
        let correctAnswersCount = 0;
        const verifiedAnswers =
          state.quizItem.correctAnswersState.questions.map(
            (question, answer) => {
              if (question.correctAnswer === selectedAnswers[answer]) {
                correctAnswersCount++;
              }

              return {
                question: question.question,
                correctAnswer: question.correctAnswer,
                selectedAnswer: selectedAnswers[answer],
              };
            }
          );
        return {
          totalQuestions,
          correctAnswersCount,
          spentTime: payload.spentTime,
          verifiedAnswers,
        };
      };
      const statistic = makeStatistic();
      dispatch(quizStatisticCreateAction(statistic));
      dispatch(modalOpenToggleAction({ name: 'FinalScreen' }));
      if (statistic.correctAnswersCount === statistic.totalQuestions) {
        dispatch(
          leaderBoardPost({
            id: payload.id,
            spentTime: statistic.spentTime,
            username: localStorage.getItem('username'),
          })
        );
      }
      await dispatch(quizItemFetch(payload.id));
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        return rejectWithValue(error);
      }
      return Promise.reject(error);
    }
  }
);
