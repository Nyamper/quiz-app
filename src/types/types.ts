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
  correctAnswer?: string;
};

export type QuizPartial = {
  category: string;
  quiz: string;
  description: string;
  cardImageUrl: string;
  id: string;
};

export type VerifiedAnswers = {
  question: string;
  correctAnswer: string;
  selectedAnswer: string;
};

export type Statistic = {
  totalQuestions: number;
  correctAnswersCount: number;
  spentTime: number;
  verifiedAnswers: VerifiedAnswers[];
};

export type QuizzesState = {
  loading: boolean;
  error: boolean | null;
  data: QuizPartial[];
};

export type CardProps = {
  question: QuizQuestion;
  getAnswer: Function;
};

export type AnswerProps = {
  question: QuizQuestion;
  getAnswer: Function;
};
