import { Box, Typography } from '@mui/material';
import puzzle from '../../assets/puzzle.png';

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 10,
          m: 10,
        }}
      >
        <Box width={'50%'}>
          <Typography component="h1" variant="h4" align="center">
            Any programmer and computer science specialist can not claim that he
            has learnt everything. Here I suggest you to test you skills whether
            you are a professional or just starting you coding journey.
            Challenge yourself completing the test and evaluate you achievements
            on global leaderboard! You can also create or modify your own quiz
            by adding or removing questions.
          </Typography>
        </Box>
        <Box width={'20%'} sx={{ ml: 20 }}>
          <img src={puzzle} alt="puzzle" height={400} />
        </Box>
      </Box>
    </>
  );
};

export default Home;
