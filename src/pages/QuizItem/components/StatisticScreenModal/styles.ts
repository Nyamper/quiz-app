import { styled, experimental_sx as sx } from '@mui/system';
import { Box } from '@mui/material';

export const StyledContainer = styled(Box)(
  sx({
    p: 5,
    minWidth: 500,
    minHeight: 600,
  })
);
export const StyledInnerContainer = styled(Box)(
  sx({
    p: 5,
    border: 1,
    borderColor: 'secondary.main',
  })
);

export const StyledNumberContainer = styled(Box)(
  sx({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  })
);

export const StyledQuestionContainer = styled(Box)(
  sx({
    m: 2,
    border: 1,
    borderColor: 'secondary.main',
    p: 1,
  })
);
