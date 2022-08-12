import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { quizItemFetch } from './thunk/quizItem';
import { Box, Container } from '@mui/material';
import QuestionCard from './components/QuestionCard';
import Spinner from '../../components/Spinner';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Stats from './components/Stats';

const QuizItem = () => {
  let navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  const params = useParams();
  const dispatch = useAppDispatch();
  const {
    loading,
    error,
    data: quizItem,
  } = useAppSelector((state) => state.quizItem);

  useEffect(() => {
    dispatch(quizItemFetch(params.quizid || ''));
  }, [dispatch]);

  const checkAnswer = (correctAnswer: number, selectedAnswer: number) => {
    if (questionIndex === quizItem.questions.length - 1) {
      navigate('/leaderboard', { replace: true });
    }
    setQuestionIndex((state) => state + 1);
    correctAnswer === selectedAnswer
      ? setCorrectAnswers((state) => state + 1)
      : console.log('incorrect');
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box>
          {error && <div>something went wrong</div>}
          {loading && !error && <Spinner />}
          {!loading && !error && quizItem && (
            <Box
              sx={{
                p: 5,
                display: 'flex',
                backgroundColor: '#f5f5f5',
              }}
            >
              <Stats
                correctAnswers={correctAnswers}
                totalQuestions={quizItem.questions.length}
              />
              <QuestionCard
                question={quizItem.questions[questionIndex]}
                checkAnswer={checkAnswer}
              />
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default QuizItem;
