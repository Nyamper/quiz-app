import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';

import { QuizQuestion } from '../../../../types/types';

const QuestionList = () => {
  // const QuestionList = (props: QuizQuestion[]) => {
  // const { question } = props;

  // const [questions, setQuestions] = useState([
  //   'Question 1',
  //   'Question 2',
  //   'Question 3',
  //   'Question 4',
  //   'Question 5',
  //   'Question 6',
  //   'Question 7',
  //   'Question 8',
  //   'Question 9',
  //   'Question 10',
  //   'Question 11',
  //   'Question 12',
  //   'Question 13',
  //   'Question 14',
  //   'Question 15',
  //   'Question 16',
  // ]);
  return (
    <>
      {/* sx={{ bgcolor: '#eee', height: '80vh', overflow: 'auto' }} */}
      <Box>
        <Box>
          {/* <List
            component="nav"
            aria-label="mailbox folders"
            sx={{ height: '50vh', overflow: 'auto' }}
          >
            <Divider />
            {questions.map((question, index) => {
              return (
                <ListItem button divider key={index}>
                  <ListItemText primary={question} />
                </ListItem>
              );
            })}
          </List> */}
        </Box>
        <Box sx={{ mt: 3 }}>
          <Button variant="outlined" color="primary" fullWidth>
            Add Question
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default QuestionList;
