import { styled, experimental_sx as sx } from '@mui/system';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(
  sx({
    width: '200px',
    height: '100px',
    backgroundColor: 'none',
    position: 'absolute',
    top: 0,
    bottom: 200,
    left: 0,
    right: 0,
    margin: 'auto',
  })
);
