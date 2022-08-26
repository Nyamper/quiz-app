import { Box, Typography } from '@mui/material';
import { StyledTimerContainer } from './styles';
import { StopWatchProps } from './types';

const Stopwatch = ({ seconds, minutes }: StopWatchProps) => {
  return (
    <>
      <Box m="auto" sx={{ justifyContent: 'center' }}>
        <StyledTimerContainer>
          <Typography variant="h4" align="center" sx={{ mt: 2.5 }}>
            {minutes}:{seconds}
          </Typography>
        </StyledTimerContainer>
      </Box>
    </>
  );
};

export default Stopwatch;
