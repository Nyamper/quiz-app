import { CircularProgress } from '@mui/material';
import { StyledBox } from './styles';

const Spinner = () => {
  return (
    <>
      <StyledBox>
        <CircularProgress size={100} />
      </StyledBox>
    </>
  );
};

export default Spinner;
