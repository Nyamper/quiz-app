import AnswerField from './AnswerField';

import { CardProps } from '../../../../types/types';

import { Box, Container, Typography } from '@mui/material';

const QuestionCard = (props: CardProps) => {
  const { question, _id } = props.question;

  return (
    <>
      <Container maxWidth="md" fixed>
        <Box
          key={_id}
          sx={{ border: 1, p: '20px', borderColor: 'secondary.main' }}
        >
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
        </Box>
      </Container>
    </>
  );
};

export default QuestionCard;
