import { styled, experimental_sx as sx } from '@mui/system';
import { Box } from '@mui/material';

export const StyledTimerContainer = styled(Box)(
  sx({
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    borderColor: 'secondary.main',
  })
);
