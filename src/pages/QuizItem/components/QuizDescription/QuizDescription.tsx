import PropTypes from 'prop-types';

import { DescriptionProps } from './types';

import { Box, Button, Container, Divider, Typography } from '@mui/material';

import { StyledBox } from './styles';

const QuizDescription = ({
  handleQuizStart,
  handleQuizCancel,
  quizName,
  description,
}: DescriptionProps) => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ p: 5 }} maxHeight="600">
          <StyledBox>
            <Box m="auto">
              <Typography variant="h3" component="h1" align="center">
                {quizName}
              </Typography>
              <Box sx={{ p: 3 }}></Box>
              <Typography variant="h5" component="p" align="center">
                {description}
              </Typography>

              <Divider sx={{ my: 2 }} />
              <Typography align="center">
                You have unlimited time to answer each question. But the faster
                you answer, the higher your score. If you answer all the
                questions correctly, you can take a place on the leader board
                When you are done, try again to beat your best score!
              </Typography>
            </Box>
          </StyledBox>
          <Box
            sx={{ mt: 1, pt: 5 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleQuizCancel()}
            >
              GO BACK
            </Button>
            <Box sx={{ mx: 5 }}></Box>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleQuizStart()}
            >
              START
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

QuizDescription.propTypes = {
  handleQuizStart: PropTypes.func,
  handleQuizCancel: PropTypes.func,
  quizName: PropTypes.string,
  description: PropTypes.string,
};

export default QuizDescription;
