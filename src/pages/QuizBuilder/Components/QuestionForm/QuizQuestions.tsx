import { useForm, Controller } from 'react-hook-form';
import { Box, Divider, Radio, RadioGroup, TextField } from '@mui/material';

const QuizQuestions = () => {
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
          <TextField label="Question" size="small" fullWidth />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box>
          <RadioGroup defaultValue="0">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Radio value="0" />
              <TextField
                label="answer a"
                size="small"
                fullWidth
                sx={{ my: 1 }}
              />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Radio value="1" />
              <TextField
                label="answer b"
                size="small"
                fullWidth
                sx={{ my: 1 }}
              />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Radio value="2" />
              <TextField
                label="answer c"
                size="small"
                fullWidth
                sx={{ my: 1 }}
              />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Radio value="3" />
              <TextField
                label="answer d"
                size="small"
                fullWidth
                sx={{ my: 1 }}
              />
            </Box>
          </RadioGroup>
        </Box>
      </Box>
    </>
  );
};

export default QuizQuestions;
