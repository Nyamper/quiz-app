import { styled, experimental_sx as sx } from '@mui/system';
import { Box, Button } from '@mui/material';

export const StyledButtonBox = styled(Box)(
  sx({
    p: 1,
    my: 5,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  })
);

export const StyledButton = styled(Button)(
  sx({
    my: 1,
    height: '50px',
  })
);

export const StyledBoxContainer = styled(Box)(
  sx({
    p: 5,
    minWidth: 350,
    minHeight: 200,
  })
);

export const StyledContentBox = styled(Box)(
  sx({
    p: 5,
    border: 1,
    borderColor: 'secondary.main',
  })
);
