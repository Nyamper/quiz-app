import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useState } from 'react';

type QuestionListProps = {
  handleSubmit: Function;
};

const QuestionList = ({ handleSubmit }: QuestionListProps) => {
  const [questions, setQuestions] = useState([
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
    'Question 6',
    'Question 7',
    'Question 8',
    'Question 9',
    'Question 10',
    'Question 11',
    'Question 12',
    'Question 13',
    'Question 14',
    'Question 15',
    'Question 16',
  ]);
  return (
    <>
      <Box>
        <Box>
          <List
            component="nav"
            aria-label="mailbox folders"
            sx={{ height: '50vh', overflow: 'auto' }}
          >
            <Divider />
            {questions.map((question, index) => {
              return (
                <ListItem button divider key={index}>
                  <ListItemText>
                    <Typography variant="body1" align="center">
                      {question}
                    </Typography>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => handleSubmit()}
          >
            Add Question
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default QuestionList;
