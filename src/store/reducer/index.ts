import { combineReducers } from '@reduxjs/toolkit';
import quizListReducer from '../../pages/QuizList/reducer/quizList';
import quizItemReducer from '../../pages/QuizItem/reducer/quizItem';
import quizBuilderReducer from '../../pages/QuizBuilder/reducer/quizBuilder';
import leaderboardReducer from '../../pages/LeaderBoard/reducer/leaderBoard';
import authReducer from '../../pages/Auth/reducer/auth';
import modal from '../modal/reducer/modal';

export default combineReducers({
  quizList: quizListReducer,
  quizItem: quizItemReducer,
  quizBuilder: quizBuilderReducer,
  leaderboard: leaderboardReducer,
  auth: authReducer,
  modal,
});
