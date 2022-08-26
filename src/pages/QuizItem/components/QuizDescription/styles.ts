import { styled, experimental_sx as sx } from '@mui/system';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(
  sx({
    p: 5,
    display: 'flex',
    border: 1,
    borderColor: 'secondary.main',
    height: 455,
  })
);
