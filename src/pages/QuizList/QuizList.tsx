import { useEffect } from 'react';

import Spinner from '../../components/Spinner';
import QuizCard from './components/QuizCard';
import Error from '../../components/Error';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { quizListFetch } from './thunk/quizList';

import { Container } from '@mui/material';
import { StyledCardContainer, StyledBox, StyledLink } from './styles';

const Quiz = () => {
  const dispatch = useAppDispatch();
  const {
    loading,
    error,
    data: quizzes,
  } = useAppSelector((state) => state.quizList);

  useEffect(() => {
    dispatch(quizListFetch());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth={'xl'}>
        {loading && !error && <Spinner />}
        {error && <Error />}
        {!loading && !error && (
          <StyledCardContainer
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {quizzes.map((quiz) => {
              return (
                <StyledLink to={quiz.id} key={quiz.id}>
                  <StyledBox>
                    <QuizCard {...quiz} />
                  </StyledBox>
                </StyledLink>
              );
            })}
          </StyledCardContainer>
        )}
      </Container>
    </>
  );
};

export default Quiz;
