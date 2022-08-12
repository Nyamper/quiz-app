import { styled, experimental_sx as sx } from '@mui/system';

import { Card } from '@mui/material';

export const StyledCard = styled(Card)(
  sx({
    minWidth: 300,
    maxWidth: 300,
    minHeight: 210,
    maxHeight: 210,
  })
);
