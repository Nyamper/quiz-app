import { Box, Typography } from '@mui/material';
import Stopwatch from './Stopwatch';

type StatsProps = {
  questionCurrentIndex: number;
  totalQuestions: number;
  seconds: number;
  minutes: number;
};

const Stats = ({
  questionCurrentIndex,
  totalQuestions,
  seconds,
  minutes,
}: StatsProps) => {
  return (
    <>
      <Box
        minWidth={'25%'}
        maxWidth={'25%'}
        sx={{ border: 1, borderColor: 'secondary.main' }}
      >
        <Typography variant={'h5'} align={'center'} sx={{ mt: 5 }}>
          QUESTION
        </Typography>

        <Typography variant={'h5'} align={'center'} sx={{ m: 1 }}>
          {questionCurrentIndex + 1} of {totalQuestions}
        </Typography>

        <Box
          display="flex"
          width="auto"
          height={50}
          sx={{ display: 'flex', mt: 8 }}
        >
          <Stopwatch seconds={seconds} minutes={minutes} />
        </Box>
      </Box>
    </>
  );
};

export default Stats;
