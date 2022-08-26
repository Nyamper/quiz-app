import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { login } from '../../../api/auth';

import {
  quizAuthLoginSetUserNameAction,
  quizAuthRemoveTokenAction,
} from '../reducer/auth';

const QUIZ_AUTH_LOGIN_THUNK_TYPE = 'QUIZ_AUTH_LOGIN_THUNK_TYPE';

export const quizAuthLogin = createAsyncThunk(
  QUIZ_AUTH_LOGIN_THUNK_TYPE,
  async (
    payload: { username: string; password: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const token = await login(payload.username, payload.password);
      dispatch(quizAuthLoginSetUserNameAction(payload.username));
      localStorage.setItem('token', token);
      localStorage.setItem('username', payload.username);
      window.location.reload();
      return { token };
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error('Wrong Username or Password');
        return rejectWithValue(error.message);
      }
      return Promise.reject(error);
    }
  }
);
