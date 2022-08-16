export type Quiz = {
  _id?: string;
  category: string;
  quizName: string;
  description: string;
  cardImageUrl?: string;
  questions: Array<QuizQuestion>;
};

export type LeaderBoard = {
  _id?: string;
  username: string;
  category: string;
  quizName: string;
  time: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type LeaderBoardState = {
  loading: boolean;
  error: boolean | null;
  data: LeaderBoard[];
};

export type LeaderBoardPartial = {
  quizName: string;
  time: number;
  questionCount: number;
};

export type QuizQuestion = {
  _id?: string;
  question: string;
  answers: Array<string>;
  correctAnswerIndex?: number;
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
  start: boolean;
  questionCurrentIndex: number;
  selectedAnswers: Array<number>;
  data: Quiz;
};

export type CardProps = {
  question: QuizQuestion;
  getAnswer: Function;
};

export type AnswerProps = {
  question: QuizQuestion;
  getAnswer: Function;
};
