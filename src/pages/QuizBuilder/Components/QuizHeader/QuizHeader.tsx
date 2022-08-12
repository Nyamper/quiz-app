import { Box, TextField } from '@mui/material';

const QuizHeader = () => {
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
        <Box display="flex" justifyContent="center" alignItems="center">
          <TextField
            fullWidth
            label="Quiz Name"
            size="small"
            sx={{ my: 1, mr: 1 }}
          />
          {/* Autocomplete as variant */}
          <TextField
            fullWidth
            label="Quiz Category"
            size="small"
            sx={{ my: 1, ml: 1 }}
          />
        </Box>
        <TextField
          label="Quiz description"
          size="small"
          fullWidth
          sx={{ my: 1 }}
        />
      </Box>
    </>
  );
};

export default QuizHeader;
