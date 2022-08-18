import { Box, Button, Typography } from '@mui/material';
import Modal from '../../../../components/Modal';

type Props = {
  handleRedirectToQuizzes?: () => void;
  handleRedirectToLeaderBoard?: () => void;
  handlePlayAgain: () => void;
  handleModalChangeName: (name: string) => void;
  resetStopWatch: () => void;
  // quizName: string;
  // timeSpent: number;
  // correctAnswers: number;
  // totalQuestions: number;
};

const FinalScreenModal = ({
  handleRedirectToQuizzes,
  handleRedirectToLeaderBoard,
  handlePlayAgain,
  handleModalChangeName,
  resetStopWatch,
}: Props) => {
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
            <Box height="250px">
              <Typography variant="h4" align="center">
                Your score is:
              </Typography>
              <Typography variant="h4" align="center">
                8/10
              </Typography>
              <Typography marginTop="20px" variant="h5" align="center">
                You spent: 70 seconds
              </Typography>
            </Box>
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
