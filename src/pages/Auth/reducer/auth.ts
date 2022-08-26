import { createSlice } from '@reduxjs/toolkit';
import { quizAuthLogin } from '../thunk/auth';

type Auth = {
  loading: boolean;
  error: boolean | null;
  token: string | null;
  username: string | null;
};

const initialState: Auth = {
  loading: true,
  error: null,
  token: null,
  username: '',
};

const QUIZ_AUTH_SLICE_NAME = 'QUIZ_AUTH_SLICE';

const quizAuthSlice = createSlice({
  name: QUIZ_AUTH_SLICE_NAME,
  initialState,
  reducers: {
    quizAuthLoginSetUserName: (state, action) => {
      state.username = action.payload;
    },

    quizAuthRemoveToken: (state) => {
      state.token = null;
      state.username = null;
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(quizAuthLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(quizAuthLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
    });
    builder.addCase(quizAuthLogin.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const {
  quizAuthLoginSetUserName: quizAuthLoginSetUserNameAction,
  quizAuthRemoveToken: quizAuthRemoveTokenAction,
} = quizAuthSlice.actions;

export default quizAuthSlice.reducer;
