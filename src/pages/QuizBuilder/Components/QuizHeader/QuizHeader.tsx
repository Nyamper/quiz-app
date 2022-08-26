import { Box } from '@mui/material';
import { FormInputText } from '../FormInputText/FormInputText';

import { QuizBuilderProps } from '../../../../types/types';

import { Control } from 'react-hook-form';

const QuizHeader = ({ control }: { control: Control<QuizBuilderProps> }) => {
  return (
    <>
      <Box
        sx={{
          p: 5,
          border: '1px solid',
          borderColor: 'secondary.main',
          mb: 5,
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ my: 2 }}
        >
          <FormInputText name="quizName" label="Quiz Name" control={control} />
          <Box sx={{ mx: 1 }} />
          <FormInputText
            name="category"
            label="Quiz Category"
            control={control}
          />
        </Box>
        <FormInputText
          name="description"
          label="Quiz description"
          control={control}
        />
      </Box>
    </>
  );
};

export default QuizHeader;
