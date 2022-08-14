import { combineReducers } from '@reduxjs/toolkit';
import quizListReducer from '../../pages/QuizList/reducer/quizList';
import quizItemReducer from '../../pages/QuizItem/reducer/quizItem';
import quizBuilderReducer from '../../pages/QuizBuilder/reducer/quizBuilder';

export default combineReducers({
  quizList: quizListReducer,
  quizItem: quizItemReducer,
  quizBuilder: quizBuilderReducer,
});
