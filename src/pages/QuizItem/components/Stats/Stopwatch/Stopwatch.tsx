import { useStopwatch } from 'react-timer-hook';

import { Box, Typography } from '@mui/material';

const Stopwatch = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  return (
    <>
      <Box m="auto" sx={{ justifyContent: 'center' }}>
        <Box
          sx={{
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderRadius: '50%',
            borderColor: 'secondary.main',
          }}
        >
          <Typography variant="h4" align="center" sx={{ mt: 2.5 }}>
            {seconds}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Stopwatch;
