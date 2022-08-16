import { useEffect } from 'react';
import LeaderTable from './components/LeaderTable';
import { Container } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { leaderBoardFetch } from './thunk/leaderBoard';

const LeaderBoard = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.leaderboard);

  useEffect(() => {
    dispatch(leaderBoardFetch());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="lg">
        <LeaderTable {...data} />
      </Container>
    </>
  );
};

export default LeaderBoard;
