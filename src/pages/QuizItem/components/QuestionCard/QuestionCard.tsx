import AnswerField from './AnswerField';

import { CardProps } from '../../../../types/types';

import { StyledBox } from './styles';
import { Box, Container, Typography } from '@mui/material';

const QuestionCard = (props: CardProps) => {
  const { question } = props;

  return (
    <>
      <Container maxWidth="md">
        <StyledBox key={question._id}>
          <Box>
            <Typography variant={'h5'} align={'center'} sx={{ m: 5, p: 10 }}>
              {question.question}
            </Typography>
            <AnswerField question={question} checkAnswer={props.checkAnswer} />
          </Box>
        </StyledBox>
      </Container>
    </>
  );
};

export default QuestionCard;
