export type Quiz = {
  _id?: string;
  category: string;
  quizName: string;
  description: string;
  cardImageUrl?: string;
  questions: Array<QuizQuestion>;
};

export type QuizQuestion = {
  _id: string;
  question: string;
  answers: Array<string>;
  correctAnswerIndex: number;
};

export type QuizPartial = {
  category: string;
  quiz: string;
  description: string;
  cardImageUrl: string;
  id: string;
};

export type QuizzesState = {
  loading: boolean;
  error: boolean | null;
  data: QuizPartial[];
};

export type QuizState = {
  loading: boolean;
  error: boolean | null;
  data: Quiz;
};

export type CardProps = {
  question: QuizQuestion;
  checkAnswer: Function;
};

export type AnswerProps = {
  question: QuizQuestion;
  checkAnswer: Function;
};
