import { combineReducers } from '@reduxjs/toolkit';
import quizListReducer from '../../pages/QuizList/reducer/quizList';
import quizItemReducer from '../../pages/QuizItem/reducer/quizItem';

export default combineReducers({
  quizList: quizListReducer,
  quizItem: quizItemReducer,
});
