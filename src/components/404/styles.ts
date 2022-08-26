import { Box } from '@mui/material';
import { styled, experimental_sx as sx } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)(
  sx({
    all: 'unset',
  })
);

export const StyledBox = styled(Box)(
  sx({
    display: 'flex',
    justifyContent: 'center',
    mt: '5%',
  })
);
