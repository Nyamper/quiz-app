import { Box, Container, Typography } from '@mui/material';
import Stopwatch from './Stopwatch';

type StatsProps = {
  questionCurrentIndex: number;
  totalQuestions: number;
  description: string;
};

const Stats = (props: StatsProps) => {
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
          {props.questionCurrentIndex + 1} of {props.totalQuestions}
        </Typography>

        <Box
          display="flex"
          width="auto"
          height={50}
          sx={{ display: 'flex', mt: 8 }}
        >
          <Stopwatch />
        </Box>
        {/* <Box sx={{ mt: 20 }}>
          <Typography variant={'body1'} align={'center'} sx={{ m: 1 }}>
            {props.description}
          </Typography>
        </Box> */}
      </Box>
    </>
  );
};

export default Stats;
