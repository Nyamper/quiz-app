import { styled, experimental_sx as sx } from '@mui/system';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(
  sx({
    border: 1,
    p: '20px',
    borderColor: 'secondary.main',
  })
);
