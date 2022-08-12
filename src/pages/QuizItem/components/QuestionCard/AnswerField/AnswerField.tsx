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
  const { checkAnswer } = props;
  const { answers, correctAnswerIndex } = props.question;

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
                onClick={() => checkAnswer(correctAnswerIndex, index)}
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
