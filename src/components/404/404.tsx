import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { StyledNavLink, StyledBox } from './styles';

const ErrorPage = () => {
  return (
    <>
      <StyledBox>
        <Box textAlign="center">
          <Typography variant="h1">404</Typography>
          <Typography variant="h3">Page not found</Typography>
          <Button variant="outlined" sx={{ mt: 10 }}>
            <StyledNavLink to="/">Go to Home page</StyledNavLink>
          </Button>
        </Box>
      </StyledBox>
    </>
  );
};

export default ErrorPage;
