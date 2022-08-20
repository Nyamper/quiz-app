import { Box, Button, Typography } from '@mui/material';
import Modal from '../../../../components/Modal';
import { VerifiedAnswers } from '../../../../types/types';

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
        <Box
          sx={{
            p: 5,
            minWidth: 350,
            minHeight: 200,
            backgroundColor: '#f5f5f5',
          }}
        >
          <Box sx={{ p: 5, border: 1, borderColor: 'secondary.main' }}>
            <Box height="500px">
              <Typography variant="h4" align="center" sx={{ mb: 2 }}>
                Details
              </Typography>
              <Box>
                <Box sx={{ height: '45vh', overflow: 'auto' }}>
                  {verifiedAnswers.map((answer, index) => {
                    return (
                      <Box display="flex" justifyContent="center">
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                          }}
                        >
                          <Typography variant="h2">{index + 1}</Typography>
                        </Box>
                        <Box
                          sx={{
                            m: 2,
                            border: 1,
                            borderColor: 'secondary.main',
                            p: 1,
                          }}
                        >
                          <Typography variant="body1" align="center">
                            {answer.question}
                          </Typography>
                          <Typography
                            variant="body1"
                            align="center"
                            color="green"
                          >
                            Correct answer: {answer.correctAnswer}
                          </Typography>
                          <Typography
                            variant="body1"
                            align="center"
                            color={
                              answer.selectedAnswer === answer.correctAnswer
                                ? 'green'
                                : 'red'
                            }
                          >
                            Your answer: {answer.selectedAnswer}
                          </Typography>
                        </Box>
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
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default StatisticScreenModal;
