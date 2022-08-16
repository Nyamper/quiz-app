import { AnswerProps } from '../../../../../types/types';
import { StyledPaper, StyledBox } from './styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

const AnswerField = (props: AnswerProps) => {
  const { getAnswer } = props;
  const { answers } = props.question;

  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledBox>
          {answers.map((answer, index) => {
            return (
              <StyledPaper
                color="blue"
                elevation={3}
                key={index}
                onClick={() => getAnswer(index)}
              >
                {answer}
              </StyledPaper>
            );
          })}
        </StyledBox>
      </ThemeProvider>
    </>
  );
};

export default AnswerField;
