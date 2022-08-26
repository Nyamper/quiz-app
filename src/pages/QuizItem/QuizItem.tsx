import { useEffect, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useStopwatch } from 'react-timer-hook';

import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

import Stats from './components/Stats';
import QuestionCard from './components/QuestionCard';
import QuizDescription from './components/QuizDescription';
import FinalScreenModal from './components/FinalScreenModal';
import StatisticScreenModal from './components/StatisticScreenModal';

import { StyledBox } from './styles';

import { Box, Container } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

import { quizItemFetch, quizItemStatisticCreateStart } from './thunk/quizItem';
import {
  modalOpenToggleAction,
  modalSetNameAction,
} from '../../store/modal/reducer/modal';
import {
  quizSelectedAnswersAction,
  quizStartAction,
  quizStateResetAction,
  quizQuestionCurrentIndexAction,
} from './reducer/quizItem';

const QuizItem = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const {
    loading,
    error,
    start,
    questionCurrentIndex,
    data: quizItem,
    correctAnswersState,
    statisticState,
  } = useAppSelector((state) => state.quizItem);
  const { open, name } = useAppSelector((state) => state.modal);

  const { category, quizName, description, questions } = quizItem;
  const { loading: answersLoading, error: answersError } = correctAnswersState;
  const { verifiedAnswers } = statisticState;

  const {
    seconds,
    minutes,
    start: startStopWatch,
    pause: pauseStopWatch,
    reset: resetStopWatch,
  } = useStopwatch({ autoStart: false });

  useEffect(() => {
    dispatch(quizItemFetch(params.quizid || ''));
  }, [dispatch, params.quizid]);

  useEffect(() => {
    dispatch(quizStateResetAction());
  }, [dispatch, location]);

  const handleModalOpen = useCallback(() => {
    dispatch(modalOpenToggleAction({ name: 'FinalScreen' }));
  }, [dispatch]);

  const handleModalChangeName = useCallback(
    (name: string) => {
      dispatch(modalSetNameAction({ name: name }));
    },
    [dispatch]
  );

  const handleRedirectToLeaderBoard = useCallback(() => {
    handleModalOpen();
    dispatch(quizStateResetAction());
    navigate('/leaderboard');
  }, [handleModalOpen, dispatch, navigate]);

  const handleRedirectToQuizzes = useCallback(() => {
    handleModalOpen();
    dispatch(quizStateResetAction());
    navigate('/quizzes');
  }, [handleModalOpen, dispatch, navigate]);

  const handlePlayAgain = useCallback(() => {
    handleModalOpen();
    dispatch(quizStateResetAction());
    navigate(`/quizzes/${params.quizid}`);
  }, [handleModalOpen, dispatch, navigate, params.quizid]);

  const handleQuizStart = useCallback(() => {
    dispatch(quizStartAction());
    startStopWatch();
  }, [dispatch, startStopWatch]);

  const handleQuizCancel = useCallback(() => {
    navigate('/quizzes');
    dispatch(quizStateResetAction());
  }, [dispatch, navigate]);

  const getAnswer = (selectedAnswer: string) => {
    dispatch(quizSelectedAnswersAction(selectedAnswer));

    if (questionCurrentIndex === questions.length - 1) {
      pauseStopWatch();
      const id = params.quizid;
      const spentTime: number = minutes ? minutes * 60 + seconds : seconds;
      if (!id) return;
      dispatch(quizItemStatisticCreateStart({ id, spentTime }));
    }

    if (questionCurrentIndex < questions.length - 1) {
      dispatch(quizQuestionCurrentIndexAction());
    }
  };

  return (
    <>
      {loading && !error && <Spinner />}
      {error && <Error />}
      {!start && !error && !loading && (
        <QuizDescription
          handleQuizStart={handleQuizStart}
          handleQuizCancel={handleQuizCancel}
          quizName={quizName}
          category={category}
          description={description}
        />
      )}
      {start && (
        <Container maxWidth="lg" fixed>
          <Box sx={{ p: 5 }}>
            <StyledBox>
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
            </StyledBox>
          </Box>
        </Container>
      )}

      {answersError && <Error />}
      {answersLoading && !answersError && <Spinner />}
      {!answersLoading && open && name === 'FinalScreen' && (
        <FinalScreenModal
          handleRedirectToQuizzes={handleRedirectToQuizzes}
          handleRedirectToLeaderBoard={handleRedirectToLeaderBoard}
          handleModalChangeName={handleModalChangeName}
          handlePlayAgain={handlePlayAgain}
          resetStopWatch={resetStopWatch}
          statisticState={statisticState}
        />
      )}
      {open && name === 'Statistic' && (
        <StatisticScreenModal
          handleModalChangeName={handleModalChangeName}
          verifiedAnswers={verifiedAnswers}
        />
      )}
    </>
  );
};

export default QuizItem;
