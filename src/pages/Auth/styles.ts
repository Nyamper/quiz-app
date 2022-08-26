import { styled, experimental_sx as sx } from '@mui/system';
import { Box } from '@mui/material';

export const StyledContainer = styled(Box)(
  sx({
    pt: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  })
);
