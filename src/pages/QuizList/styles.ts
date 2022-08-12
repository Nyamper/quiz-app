import { styled, experimental_sx as sx } from '@mui/system';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledCardContainer = styled(Grid)(
  sx({ justifyContent: 'center' })
);

export const StyledBox = styled(Box)(sx({ m: '20px' }));

export const StyledLink = styled(Link)`
  all: unset;
`;
