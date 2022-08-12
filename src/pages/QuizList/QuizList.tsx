import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { quizListFetch } from './thunk/quizList';
import { Container } from '@mui/material';
import Spinner from '../../components/Spinner';
import QuizCard from './components/QuizCard';
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
        {error && <div>something went wrong</div>}
        {loading && !error && <Spinner />}
        <StyledCardContainer
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {!loading &&
            !error &&
            quizzes.map((quiz) => {
              return (
                <StyledLink to={quiz.id} key={quiz.id}>
                  <StyledBox>
                    <QuizCard {...quiz} />
                  </StyledBox>
                </StyledLink>
              );
            })}
        </StyledCardContainer>
      </Container>
    </>
  );
};

export default Quiz;
