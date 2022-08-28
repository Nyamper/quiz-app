import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Stopwatch from './Stopwatch';
import { StyledContainer } from './styles';
import { StatsProps } from './types';

const Stats = ({
  questionCurrentIndex,
  totalQuestions,
  seconds,
  minutes,
  hours,
  tip,
}: StatsProps) => {
  return (
    <>
      <StyledContainer minWidth={'25%'} maxWidth={'25%'}>
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
          <Stopwatch seconds={seconds} minutes={minutes} hours={hours} />
        </Box>
        <Box sx={{ mt: 15 }}>
          <Typography variant={'h5'} align={'center'}>
            TIPS:
          </Typography>
          <Typography variant="h6" align="center">
            {tip}
          </Typography>
        </Box>
      </StyledContainer>
    </>
  );
};

Stats.propTypes = {
  questionCurrentIndex: PropTypes.number,
  totalQuestions: PropTypes.number,
  seconds: PropTypes.number,
  minutes: PropTypes.number,
  hours: PropTypes.number,
};

export default Stats;
