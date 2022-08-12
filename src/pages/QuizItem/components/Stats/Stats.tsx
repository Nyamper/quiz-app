import { Box, Container, Typography } from '@mui/material';

type StatsProps = {
  correctAnswers: number;
  totalQuestions: number;
};

const Stats = (props: StatsProps) => {
  return (
    <>
      <Box sx={{ border: 1 }}>
        <Typography variant={'h5'} align={'center'} sx={{ m: 5 }}>
          Stats
        </Typography>
        <Typography variant={'body1'} align={'center'} sx={{ m: 5 }}>
          You answered {props.correctAnswers} out of {props.totalQuestions}{' '}
          questions correctly.
        </Typography>
      </Box>
    </>
  );
};

export default Stats;
