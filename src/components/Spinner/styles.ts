import { styled, experimental_sx as sx } from '@mui/system';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(
  sx({
    display: 'flex',
    justifyContent: 'center',
  })
);
