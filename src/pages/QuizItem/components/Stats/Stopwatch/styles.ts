import { styled, experimental_sx as sx } from '@mui/system';
import { Box } from '@mui/material';

export const StyledTimerContainer = styled(Box)(
  sx({
    m: 1,
    mt: 5,
    border: 1,
    width: '11rem',
    borderColor: 'secondary.main',
  })
);
export const StyledContainer = styled(Box)(
  sx({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  })
);
