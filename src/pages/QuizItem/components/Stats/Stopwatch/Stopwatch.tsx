import { Box, Typography } from '@mui/material';
import { StyledTimerContainer, StyledContainer } from './styles';
import { StopWatchProps } from './types';

const Stopwatch = ({ seconds, minutes, hours }: StopWatchProps) => {
  return (
    <>
      <StyledContainer m="auto">
        <Box>
          <StyledTimerContainer>
            <Typography variant="h4" align="center">
              {hours < 10 ? `0${hours}` : hours}
              {minutes < 10 ? `:0${minutes}` : `:${minutes}`}
              {seconds < 10 ? `:0${seconds}` : `:${seconds}`}
            </Typography>
          </StyledTimerContainer>
        </Box>
      </StyledContainer>
    </>
  );
};

export default Stopwatch;
