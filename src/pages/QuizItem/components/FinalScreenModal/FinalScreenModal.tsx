import PropTypes from 'prop-types';
import moment from 'moment';

import { FinalScreentProps } from './types';

import { useAppSelector } from '../../../../hooks/hooks';

import Modal from '../../../../components/Modal';
import Error from '../../../../components/Error';

import { Box, CircularProgress, Typography } from '@mui/material';
import {
  StyledBoxContainer,
  StyledButtonBox,
  StyledButton,
  StyledContentBox,
} from './styles';

const FinalScreenModal = ({
  handleRedirectToQuizzes,
  handleRedirectToLeaderBoard,
  handlePlayAgain,
  handleModalChangeName,
  resetStopWatch,
  statisticState,
}: FinalScreentProps) => {
  const { loading, error } = useAppSelector(
    (state) => state.quizItem.correctAnswersState
  );
  const { totalQuestions, correctAnswersCount, spentTime } = statisticState;
  const convertedTime = moment.utc(spentTime * 1000).format('HH:mm:ss');
  return (
    <>
      <Modal>
        <StyledBoxContainer>
          <StyledContentBox>
            {error && <Error />}
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

            <StyledButtonBox>
              <StyledButton
                variant="outlined"
                onClick={() => {
                  resetStopWatch();
                  handlePlayAgain();
                }}
              >
                Play Again
              </StyledButton>

              <StyledButton
                variant="outlined"
                onClick={handleRedirectToQuizzes}
              >
                See all quizzes
              </StyledButton>

              <StyledButton
                variant="outlined"
                onClick={() => handleModalChangeName('Statistic')}
              >
                Details
              </StyledButton>

              <StyledButton
                variant="outlined"
                onClick={handleRedirectToLeaderBoard}
              >
                Leaderboard
              </StyledButton>
            </StyledButtonBox>
          </StyledContentBox>
        </StyledBoxContainer>
      </Modal>
    </>
  );
};

FinalScreenModal.propTypes = {
  handleRedirectToQuizzes: PropTypes.func.isRequired,
  handleRedirectToLeaderBoard: PropTypes.func.isRequired,
  handlePlayAgain: PropTypes.func.isRequired,
  handleModalChangeName: PropTypes.func.isRequired,
  resetStopWatch: PropTypes.func.isRequired,
  statisticState: PropTypes.shape({
    totalQuestions: PropTypes.number.isRequired,
    correctAnswersCount: PropTypes.number.isRequired,
    spentTime: PropTypes.number.isRequired,
  }).isRequired,
};

export default FinalScreenModal;
