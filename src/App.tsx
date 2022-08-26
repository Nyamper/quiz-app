import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuizList from './pages/QuizList';
import QuizItem from './pages/QuizItem';
import LeaderBoard from './pages/LeaderBoard';
import QuizBuilder from './pages/QuizBuilder';

import Layout from './components/Layout';
import ErrorPage from './components/404/404';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quizzes">
            <Route index element={<QuizList />} />
            <Route path=":quizid" element={<QuizItem />} />
          </Route>
          <Route path="builder" element={<QuizBuilder />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
