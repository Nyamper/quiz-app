import { useEffect } from 'react';

import LeaderTable from './components/LeaderTable';
import Error from '../../components/Error';
import Spinner from '../../components/Spinner';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

import { leaderBoardFetch } from './thunk/leaderBoard';

import { StyledTableCell, StyledTable } from './styles';
import { Container, Typography } from '@mui/material';
import {
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const LeaderBoard = () => {
  const dispatch = useAppDispatch();
  const {
    data: players,
    loading,
    error,
  } = useAppSelector((state) => state.leaderboard);

  useEffect(() => {
    dispatch(leaderBoardFetch());
  }, [dispatch]);

  return (
    <>
      {!error && players.length < 1 && (
        <Typography variant="h6" align="center">
          No players found, you can be first. Just complete the quiz, with all
          correct answers.
        </Typography>
      )}
      {error && <Error />}
      {loading && !error && <Spinner />}
      {!loading && !error && players.length > 0 && (
        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <TableContainer sx={{ p: 5 }}>
            <StyledTable>
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <Typography variant="h5">Player</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Category</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Quiz Name</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Time</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="h5">Date</Typography>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {players.map((player) => {
                  return <LeaderTable key={player._id} {...player} />;
                })}
              </TableBody>
            </StyledTable>
          </TableContainer>
        </Container>
      )}
    </>
  );
};

export default LeaderBoard;
