import { Box, Divider } from '@mui/material';
import { FormInputText } from '../FormInputText/FormInputText';
import { FormInputRadio } from '../FormInputRadio/FormInputRadio';

import { QuizBuilderProps } from '../../../../types/types';

import { Control } from 'react-hook-form';

const QuizQuestions = ({ control }: { control: Control<QuizBuilderProps> }) => {
  return (
    <>
      <Box
        sx={{
          p: 5,
          border: '1px solid',
          borderColor: 'secondary.main',
          alignContent: 'true',
        }}
      >
        <Box>
          <FormInputText name="question" label="Question" control={control} />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box>
            <FormInputRadio
              name={'correctAnswer'}
              label={'Radio Input'}
              control={control}
            />
          </Box>
          <Box width="100%">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ my: 2 }}
            >
              <FormInputText
                name="answerValue"
                label="Answer a"
                control={control}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ my: 2 }}
            >
              <FormInputText
                name="answerValue2"
                label="Answer b"
                control={control}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ my: 2 }}
            >
              <FormInputText
                name="answerValue3"
                label="Answer c"
                control={control}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ my: 2 }}
            >
              <FormInputText
                name="answerValue4"
                label="Answer d"
                control={control}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default QuizQuestions;
