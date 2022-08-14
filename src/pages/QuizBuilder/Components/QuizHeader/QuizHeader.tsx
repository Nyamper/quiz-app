import { Box } from '@mui/material';
import { FormInputText } from '../FormInputText/FormInputText';

import { Quiz } from '../../../../types/types';

import { Control } from 'react-hook-form';

const QuizHeader = ({ control }: { control: Control<Quiz> }) => {
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

// const QuizHeader = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           p: 5,
//           border: '1px solid',
//           borderColor: 'secondary.main',
//           mb: 5,
//         }}
//       >
//         <Box display="flex" justifyContent="center" alignItems="center">
//           <TextField
//             fullWidth
//             label="Quiz Name"
//             size="small"
//             sx={{ my: 1, mr: 1 }}
//           />
//           {/* Autocomplete as variant */}
//           <TextField
//             fullWidth
//             label="Quiz Category"
//             size="small"
//             sx={{ my: 1, ml: 1 }}
//           />
//         </Box>
//         <TextField
//           label="Quiz description"
//           size="small"
//           fullWidth
//           sx={{ my: 1 }}
//         />
//       </Box>
//     </>
//   );
// };

// export default QuizHeader;
