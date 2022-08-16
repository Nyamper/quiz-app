import { Box, Button, Container, Divider, Typography } from '@mui/material';

type Props = {
  quizStart: () => void;
  quizCancel: () => void;
  quizName: string;
  category: string;
  description: string;
};

const QuizDescription = ({
  quizStart,
  quizCancel,
  quizName,
  category,
  description,
}: Props) => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ backgroundColor: '#f5f5f5', p: 5 }} maxHeight="600">
          <Box
            sx={{
              p: 5,
              display: 'flex',
              border: 1,
              borderColor: 'secondary.main',
              height: 455,
            }}
          >
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
                you answer, the higher your score. When you are done, try again
                to beat your best score!
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ mt: 1, pt: 5 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="outlined" fullWidth onClick={() => quizCancel()}>
              GO BACK
            </Button>
            <Box sx={{ mx: 5 }}></Box>
            <Button variant="outlined" fullWidth onClick={() => quizStart()}>
              START
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default QuizDescription;
