import { Box, Button, CircularProgress, Typography } from '@mui/material';
import Modal from '../../../../components/Modal';
import { Statistic } from '../../../../types/types';
import moment from 'moment';

import { useAppSelector } from '../../../../hooks/hooks';

type Props = {
  handleRedirectToQuizzes: () => void;
  handleRedirectToLeaderBoard: () => void;
  handlePlayAgain: () => void;
  handleModalChangeName: (name: string) => void;
  resetStopWatch: () => void;
  statisticState: Statistic;
};

const FinalScreenModal = ({
  handleRedirectToQuizzes,
  handleRedirectToLeaderBoard,
  handlePlayAgain,
  handleModalChangeName,
  resetStopWatch,
  statisticState,
}: Props) => {
  const { loading, error } = useAppSelector(
    (state) => state.quizItem.correctAnswersState
  );
  const { totalQuestions, correctAnswersCount, spentTime } = statisticState;
  const convertedTime = moment.utc(spentTime * 1000).format('HH:mm:ss');
  return (
    <>
      <Modal>
        <Box
          sx={{
            p: 5,
            minWidth: 350,
            minHeight: 200,
            backgroundColor: '#f5f5f5',
          }}
        >
          <Box
            sx={{
              p: 5,
              border: 1,
              borderColor: 'secondary.main',
            }}
          >
            {error && <div>something went wrong</div>}
            {loading && !error && <CircularProgress size={24} />}
            {!loading && !error && (
              <Box height="250px">
                <Typography variant="h4" align="center">
                  Your score is:
                </Typography>
                <Typography variant="h4" align="center">
                  {correctAnswersCount}/{totalQuestions}
                </Typography>
                <Typography marginTop="20px" variant="h5" align="center">
                  Your time: {convertedTime}
                </Typography>
              </Box>
            )}
            <Box
              sx={{
                p: 1,
                my: 5,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Button
                sx={{ my: 1, height: '50px' }}
                variant="outlined"
                onClick={() => {
                  resetStopWatch();
                  handlePlayAgain();
                }}
              >
                Play Again
              </Button>

              <Button
                sx={{ my: 1, height: '50px' }}
                variant="outlined"
                onClick={handleRedirectToQuizzes}
              >
                See all quizzes
              </Button>

              <Button
                sx={{ my: 1, height: '50px' }}
                variant="outlined"
                onClick={() => handleModalChangeName('Statistic')}
              >
                Details
              </Button>

              <Button
                sx={{ my: 1, height: '50px' }}
                variant="outlined"
                onClick={handleRedirectToLeaderBoard}
              >
                Leaderboard
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default FinalScreenModal;
