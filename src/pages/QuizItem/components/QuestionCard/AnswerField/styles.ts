import { styled, experimental_sx as sx } from '@mui/system';
import { Paper, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const StyledBox = styled(Box)(
  sx({
    height: '200px',
    display: 'grid',
    gridTemplateColumns: { md: '1fr 1fr' },
    gap: 2,
  })
);

export const StyledPaper = styled(Paper)(
  sx({
    verticalAlign: 'center',
    textAlign: 'center',
    lineHeight: '90px',
    minHeight: '90px',
    fontSize: '20px',

    ':hover': {
      transform: 'scale(1.008)',
      cursor: 'pointer',
    },
  })
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});
