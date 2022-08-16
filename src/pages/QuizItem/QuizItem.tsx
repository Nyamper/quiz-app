import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { useParams, useNavigate } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import Stats from './components/Stats';
import QuestionCard from './components/QuestionCard';
import Spinner from '../../components/Spinner';
import QuizDescription from './components/QuizDescription';

import { quizItemFetch } from './thunk/quizItem';
import { modalOpenToggleAction } from '../../store/modal/reducer/modal';

import {
  quizSelectedAnswersAction,
  quizQuestionCurrentIndexAction,
  quizStartAction,
  quizStateResetAction,
} from './reducer/quizItem';

import FinalScreenModal from './components/FinalScreenModal';

const QuizItem = () => {
  const navigate = useNavigate();

  const params = useParams();
  const dispatch = useAppDispatch();
  const {
    loading,
    error,
    start,
    selectedAnswers,
    questionCurrentIndex,
    data: quizItem,
  } = useAppSelector((state) => state.quizItem);
  const { open } = useAppSelector((state) => state.modal);

  const { category, quizName, description, questions } = quizItem;

  useEffect(() => {
    dispatch(quizItemFetch(params.quizid || ''));
  }, [dispatch]);

  const handleModalOpen = () => {
    dispatch(modalOpenToggleAction());
  };

  const quizStart = () => {
    dispatch(quizStartAction());
  };

  const handleRedirectToLeaderBoard = () => {
    handleModalOpen();
    dispatch(quizStateResetAction());
    navigate('/leaderboard');
  };

  const handleRedirectToQuizzes = () => {
    handleModalOpen();
    dispatch(quizStateResetAction());
    navigate('/quizzes');
  };

  const handlePlayAgain = () => {
    handleModalOpen();
    dispatch(quizStateResetAction());
    navigate(`/quizzes/${params.quizid}`);
  };

  const quizCancel = () => {
    navigate('/quizzes');
    dispatch(quizStateResetAction());
  };

  const getAnswer = (selectedAnswer: number) => {
    if (questionCurrentIndex === questions.length - 1) {
      handleModalOpen();
    }
    if (questionCurrentIndex < questions.length - 1) {
      dispatch(quizQuestionCurrentIndexAction());
      dispatch(quizSelectedAnswersAction(selectedAnswer));
    }
  };

  return (
    <>
      {!start && !error && !loading && (
        <QuizDescription
          quizStart={quizStart}
          quizCancel={quizCancel}
          quizName={quizName}
          category={category}
          description={description}
        />
      )}
      {start && (
        <Container maxWidth="lg" fixed>
          <Box sx={{ backgroundColor: '#f5f5f5', p: 5 }}>
            {error && <div>something went wrong</div>}
            {loading && !error && <Spinner />}
            {!loading && !error && quizItem && (
              <Box
                sx={{
                  p: 5,
                  display: 'flex',
                  border: 1,
                  borderColor: 'secondary.main',
                }}
              >
                <Stats
                  questionCurrentIndex={questionCurrentIndex}
                  totalQuestions={questions.length}
                  description={description}
                />
                <QuestionCard
                  question={questions[questionCurrentIndex]}
                  getAnswer={getAnswer}
                />
              </Box>
            )}
          </Box>
        </Container>
      )}
      {open && (
        <FinalScreenModal
          handleRedirectToQuizzes={handleRedirectToQuizzes}
          handleRedirectToLeaderBoard={handleRedirectToLeaderBoard}
          handlePlayAgain={handlePlayAgain}
          onCancel={handleModalOpen}
        />
      )}
    </>
  );
};

export default QuizItem;
