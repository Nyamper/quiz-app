import { Box, Typography } from '@mui/material';

type Props = {
  seconds: number;
  minutes: number;
};

const Stopwatch = ({ seconds, minutes }: Props) => {
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
            {minutes}:{seconds}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Stopwatch;
