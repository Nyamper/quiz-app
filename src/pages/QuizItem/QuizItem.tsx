import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useStopwatch } from 'react-timer-hook';

import { Box, Container } from '@mui/material';

import Stats from './components/Stats';
import QuestionCard from './components/QuestionCard';
import Spinner from '../../components/Spinner';
import QuizDescription from './components/QuizDescription';

import { quizItemFetch } from './thunk/quizItem';
import {
  modalOpenToggleAction,
  modalSetNameAction,
} from '../../store/modal/reducer/modal';

import {
  quizSelectedAnswersAction,
  quizQuestionCurrentIndexAction,
  quizStartAction,
  quizStateResetAction,
} from './reducer/quizItem';

import FinalScreenModal from './components/FinalScreenModal';
import StatisticScreenModal from './components/StatisticScreenModal';

const QuizItem = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const {
    loading,
    error,
    start,
    selectedAnswers,
    questionCurrentIndex,
    data: quizItem,
  } = useAppSelector((state) => state.quizItem);

  const {
    seconds,
    minutes,
    start: startStopWatch,
    pause: pauseStopWatch,
    reset: resetStopWatch,
  } = useStopwatch({ autoStart: false });

  const { open, name } = useAppSelector((state) => state.modal);

  const { category, quizName, description, questions } = quizItem;

  useEffect(() => {
    dispatch(quizItemFetch(params.quizid || ''));
  }, [dispatch]);

  useEffect(() => {
    dispatch(quizStateResetAction());
  }, [location]);

  const handleModalOpen = () => {
    dispatch(modalOpenToggleAction({ name: 'FinalScreen' }));
  };

  const handleModalChangeName = (name: string) => {
    dispatch(modalSetNameAction({ name: name }));
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

  const quizStart = () => {
    dispatch(quizStartAction());
    startStopWatch();
  };

  const quizCancel = () => {
    navigate('/quizzes');
    dispatch(quizStateResetAction());
  };

  const getAnswer = (selectedAnswer: number) => {
    if (questionCurrentIndex === questions.length - 1) {
      pauseStopWatch();
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
                  seconds={seconds}
                  minutes={minutes}
                  questionCurrentIndex={questionCurrentIndex}
                  totalQuestions={questions.length}
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
      {open && name === 'FinalScreen' && (
        <FinalScreenModal
          handleRedirectToQuizzes={handleRedirectToQuizzes}
          handleRedirectToLeaderBoard={handleRedirectToLeaderBoard}
          handleModalChangeName={handleModalChangeName}
          handlePlayAgain={handlePlayAgain}
          resetStopWatch={resetStopWatch}
        />
      )}

      {open && name === 'Statistic' && (
        <StatisticScreenModal handleModalChangeName={handleModalChangeName} />
      )}
    </>
  );
};

export default QuizItem;
