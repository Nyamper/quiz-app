import { Box, Container, Typography } from '@mui/material';
import QuizHeader from './Components/QuizHeader';
import QuizQuestions from './Components/QuestionForm';
import QuestionList from './Components/QuestionList';

const QuizBuilder = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: '#f5f5f5', my: 5, py: 3 }}
      >
        <Typography variant="h3" align="center">
          QuizBuilder
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            p: 5,
            border: '1px solid',
            borderColor: 'secondary.main',
            alignContent: 'true',
          }}
        >
          <Box
            width="20%"
            sx={{
              mr: 5,
              p: 5,
              border: '1px solid',
              borderColor: 'secondary.main',
            }}
          >
            <QuestionList />
          </Box>
          <Box width="80%">
            <QuizHeader />
            <QuizQuestions />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default QuizBuilder;
