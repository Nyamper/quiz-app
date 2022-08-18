import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useStopwatch } from 'react-timer-hook';

import { Box, Container } from '@mui/material';

import Stats from './components/Stats';
import QuestionCard from './components/QuestionCard';
import Spinner from '../../components/Spinner';
import QuizDescription from './components/QuizDescription';

import { quizItemFetch, quizItemCorrectAnswersFetch } from './thunk/quizItem';
import {
  modalOpenToggleAction,
  modalSetNameAction,
} from '../../store/modal/reducer/modal';

import {
  quizSelectedAnswersAction,
  quizStartAction,
  quizStateResetAction,
  quizQuestionCurrentIndexAction,
  createQuizStatisticAction,
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
    questionsState,
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

  const handleQuizStart = () => {
    dispatch(quizStartAction());
    startStopWatch();
  };

  const handleQuizCancel = () => {
    navigate('/quizzes');
    dispatch(quizStateResetAction());
  };

  const handleQuizEnd = () => {
    pauseStopWatch();
    handleModalOpen();
    dispatch(quizItemCorrectAnswersFetch(params.quizid || ''));
  };

  const getAnswer = (selectedAnswer: number) => {
    dispatch(quizSelectedAnswersAction(selectedAnswer));
    if (questionCurrentIndex === questions.length - 1) {
      handleQuizEnd();
    }
    if (questionCurrentIndex < questions.length - 1) {
      dispatch(quizQuestionCurrentIndexAction());
    }
  };

  const createStatistic = () => {
    const totalQuestions = questions.length;
    let correctAnswersCount = 0;
    const spentTime: number = minutes ? minutes * 60 + seconds : seconds;
    const verifiedAnswers = questionsState.questions.map(
      ({ question, answers, correctAnswerIndex }) => {
        return {
          question: question,
          answers: answers.filter((answer, index) => {
            if (index === selectedAnswers[index]) {
              correctAnswersCount++;
              return answer;
            } else {
              if (index === correctAnswerIndex) {
                return answer;
              }
            }
            // return index === correctAnswerIndex || index === selectedAnswers[index] ? answer : null;
          }),
        };
      }
    );
    console.log(verifiedAnswers);
    console.log(selectedAnswers);
    // const verifiedAnswers = questionsState.questions.map(
    //   ({ question, answers, correctAnswerIndex }) => {
    //     return {
    //       question: question,
    //       answers: answers.filter((answer, index) => {
    //         return index === correctAnswerIndex ||
    //           index === selectedAnswers[index]
    //           ? answer
    //           : null;
    //       }),
    //     };
    //   }
    // );
  };

  return (
    <>
      <button onClick={() => createStatistic()}>test</button>
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
        <StatisticScreenModal
          handleModalChangeName={handleModalChangeName}
          createStatistic={createStatistic}
        />
      )}
    </>
  );
};

export default QuizItem;
