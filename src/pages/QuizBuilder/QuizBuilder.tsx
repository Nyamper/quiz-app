import { FormProvider, useForm } from 'react-hook-form';
import { Box, Button, Container, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  quizAddQuestionAction,
  quizBuildCompleteAction,
} from './reducer/quizBuilder';
import { quizItemCreate } from './thunk/quizBuilder';

import QuizHeader from './Components/QuizHeader';
import QuizQuestions from './Components/QuestionForm';
import QuestionList from './Components/QuestionList';

import { QuizBuilderProps } from '../../types/types';

const defaultValues = {
  category: '',
  quizName: '',
  description: '',
  cardImageUrl: '',
  correctAnswer: '0',
  question: '',
  answerValue: '',
  answerValue2: '',
  answerValue3: '',
  answerValue4: '',
};

const QuizBuilder = () => {
  const dispatch = useAppDispatch();
  const quizBuilder = useAppSelector((state) => state.quizBuilder.data);

  const methods = useForm<QuizBuilderProps>({
    defaultValues: defaultValues,
  });

  const { handleSubmit, reset, control, setValue, watch, resetField } = methods;

  const onSubmit = (data: QuizBuilderProps) => {};

  const handleCreateQuiz = () => {
    dispatch(quizItemCreate(quizBuilder));
  };

  const handleResetAnswers = () => {
    resetField('question');
    resetField('answerValue');
    resetField('answerValue2');
    resetField('answerValue3');
    resetField('answerValue4');
    resetField('correctAnswer');
  };

  return (
    <>
      <Container maxWidth="lg">
        <FormProvider {...methods}>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              p: 5,
              alignContent: 'true',
            }}
          >
            <Box width="80%">
              <QuizHeader control={control} />
              <QuizQuestions control={control} />
            </Box>
            <Box
              width="15%"
              sx={{
                ml: 5,
                p: 5,
                border: '1px solid',
                borderColor: 'secondary.main',
              }}
            >
              <QuestionList handleSubmit={handleSubmit(onSubmit)} />
            </Box>
          </Box>
          {/* <Button onClick={() => handleCreateQuiz()}>Submit</Button> */}
        </FormProvider>
      </Container>
    </>
  );
};

export default QuizBuilder;
