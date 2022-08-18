import { useForm, useFieldArray, useWatch, Control } from 'react-hook-form';

import { FormInputRadio } from './Components/FormInputRadio/FormInputRadio';
import { FormInputText } from './Components/FormInputText/FormInputText';

import { QuizQuestion } from '../../types/types';
import { Container } from '@mui/material';

const Build = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<QuizQuestion>({
    defaultValues: {
      question: '',
      answers: ['', '', '', ''],
      correctAnswer: '',
    },
    mode: 'onBlur',
  });

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'cart',
  // });

  return (
    <>
      <Container></Container>
    </>
  );
};

export default Build;
