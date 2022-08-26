import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { StyledBox } from './styles';
import { Typography } from '@mui/material';

const Error = () => {
  return (
    <>
      <StyledBox>
        <ErrorOutlineIcon color="error" sx={{ fontSize: 200 }} />
      </StyledBox>
      <Typography align="center" variant="h4" color="error" marginTop={20}>
        Something went wrong, please try again later
      </Typography>
    </>
  );
};

export default Error;
