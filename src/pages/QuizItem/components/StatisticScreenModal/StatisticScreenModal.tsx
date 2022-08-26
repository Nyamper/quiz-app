import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@mui/material';
import Modal from '../../../../components/Modal';
import { VerifiedAnswers } from '../../../../types/types';

import {
  StyledContainer,
  StyledInnerContainer,
  StyledNumberContainer,
  StyledQuestionContainer,
} from './styles';

type Props = {
  handleModalChangeName: (name: string) => void;
  verifiedAnswers: VerifiedAnswers[];
};

const StatisticScreenModal = ({
  handleModalChangeName,
  verifiedAnswers,
}: Props) => {
  return (
    <>
      <Modal>
        <StyledContainer>
          <StyledInnerContainer>
            <Box height="500px">
              <Typography variant="h4" align="center" sx={{ mb: 2 }}>
                Details
              </Typography>
              <Box>
                <Box sx={{ height: '45vh', overflow: 'auto' }}>
                  {verifiedAnswers.map((answer, index) => {
                    return (
                      <Box display="flex" justifyContent="center" key={index}>
                        <StyledNumberContainer width="15%">
                          <Typography variant="h3">{index + 1}</Typography>
                        </StyledNumberContainer>
                        <StyledQuestionContainer width="80%">
                          <Typography variant="body1" align="center">
                            {answer.question}
                          </Typography>
                          <Typography
                            variant="body1"
                            align="center"
                            color="secondary.main"
                          >
                            Correct answer: {answer.correctAnswer}
                          </Typography>
                          <Typography
                            variant="body1"
                            align="center"
                            color={
                              answer.selectedAnswer === answer.correctAnswer
                                ? 'secondary.main'
                                : 'red'
                            }
                          >
                            Your answer: {answer.selectedAnswer}
                          </Typography>
                        </StyledQuestionContainer>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
            <Box>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleModalChangeName('FinalScreen')}
              >
                Go Back
              </Button>
            </Box>
          </StyledInnerContainer>
        </StyledContainer>
      </Modal>
    </>
  );
};

StatisticScreenModal.propTypes = {
  handleModalChangeName: PropTypes.func.isRequired,
  verifiedAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      correctAnswer: PropTypes.string.isRequired,
      selectedAnswer: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default StatisticScreenModal;
