import { useEffect } from 'react';
import LeaderTable from './components/LeaderTable';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

import { leaderBoardFetch } from './thunk/leaderBoard';

import { Container, Typography } from '@mui/material';
import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const LeaderBoard = () => {
  const dispatch = useAppDispatch();
  const { data: players } = useAppSelector((state) => state.leaderboard);

  useEffect(() => {
    dispatch(leaderBoardFetch());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <TableContainer sx={{ backgroundColor: '#f5f5f5', p: 5 }}>
          <Table
            sx={{
              minWidth: 650,
              border: 1,
              borderColor: 'secondary.main',
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>
                  <Typography variant="h5">Player</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>
                  <Typography variant="h5">Category</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>
                  <Typography variant="h5">Quiz Name</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>
                  <Typography variant="h5">Time</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>
                  <Typography variant="h5">Date</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => {
                return <LeaderTable key={player._id} {...player} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default LeaderBoard;
