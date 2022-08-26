import { AnswerProps } from '../../../../../types/types';
import { StyledPaper, StyledBox } from './styles';
import { Typography } from '@mui/material';

const AnswerField = (props: AnswerProps) => {
  const { getAnswer } = props;
  const { answers } = props.question;

  return (
    <>
      <StyledBox>
        {answers.map((answer, index) => {
          return (
            <StyledPaper
              elevation={3}
              key={index}
              onClick={() => getAnswer(answer)}
            >
              <Typography variant="h6">{answer}</Typography>
            </StyledPaper>
          );
        })}
      </StyledBox>
    </>
  );
};

export default AnswerField;
