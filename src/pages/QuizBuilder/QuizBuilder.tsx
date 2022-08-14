import { FormProvider, useForm } from 'react-hook-form';
import { Box, Button, Container, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addQuestionAction } from './reducer/quizBuilder';

import QuizHeader from './Components/QuizHeader';
import QuizQuestions from './Components/QuestionForm';
import QuestionList from './Components/QuestionList';

import { QuizQuestion, Quiz } from '../../types/types';

interface IFormInput {
  answerValue: string;
}

const defaultValues = {
  question: '',
  correctAnswerIndex: '0',
  answerValue: '',
  answerValue2: '',
  answerValue3: '',
  answerValue4: '',
};

const QuizBuilder = () => {
  const dispatch = useAppDispatch();
  const quizBuilder = useAppSelector((state) => state.quizBuilder);
  const methods = useForm<Quiz>({ defaultValues: quizBuilder });
  // console.log(quizBuilder);
  // const methods = useForm<Quiz[]>({ defaultValues: defaultValues });
  // const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;

  const onSubmit = (data: Quiz) => {
    // const onSubmit = (data: any) => {
    dispatch(addQuestionAction(data));
    console.log(data);
    // console.log(questions);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: '#f5f5f5', my: 5, py: 3 }}
      >
        <FormProvider {...methods}>
          <Typography variant="h3" align="center">
            QuizBuilder
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              p: 5,
              border: '1px solid',
              borderColor: 'secondary.main',
              alignContent: 'true',
            }}
          >
            <Box
              width="20%"
              sx={{
                mr: 5,
                p: 5,
                border: '1px solid',
                borderColor: 'secondary.main',
              }}
            >
              {/* here */}
              <QuestionList />
              {/* <QuestionList control={control} {...questions} /> */}
            </Box>
            <Box width="80%">
              <QuizHeader control={control} />
              {/* here  */}
              <QuizQuestions control={control} />
            </Box>
            <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
          </Box>
        </FormProvider>
      </Container>
    </>
  );
};

export default QuizBuilder;
