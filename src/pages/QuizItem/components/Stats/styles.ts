import { styled, experimental_sx as sx } from '@mui/system';
import { Box } from '@mui/material';

export const StyledContainer = styled(Box)(
  sx({
    border: 1,
    borderColor: 'secondary.main',
  })
);
