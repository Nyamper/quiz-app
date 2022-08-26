import PropTypes from 'prop-types';

import AnswerField from './AnswerField';

import { CardProps } from './types';

import { Box, Container, Typography } from '@mui/material';

import { StyledBox } from './styles';

const QuestionCard = (props: CardProps) => {
  const { question, id } = props.question;

  return (
    <>
      <Container maxWidth="md" fixed>
        <StyledBox key={id}>
          <Box display="flex" width="auto" height={300}>
            <Box m="auto">
              <Typography variant={'h5'} align={'center'}>
                {question}
              </Typography>
            </Box>
          </Box>
          <Box>
            <AnswerField
              question={props.question}
              getAnswer={props.getAnswer}
            />
          </Box>
        </StyledBox>
      </Container>
    </>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.object,
  getAnswer: PropTypes.func,
};

export default QuestionCard;
