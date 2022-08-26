import { Statistic } from '../../../../types/types';

export type FinalScreentProps = {
  handleRedirectToQuizzes: () => void;
  handleRedirectToLeaderBoard: () => void;
  handlePlayAgain: () => void;
  handleModalChangeName: (name: string) => void;
  resetStopWatch: () => void;
  statisticState: Statistic;
};
