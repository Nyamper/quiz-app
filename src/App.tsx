import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LeaderBoard from './pages/LeaderBoard';
import Home from './pages/Home';
import QuizList from './pages/QuizList';
import QuizItem from './pages/QuizItem';

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
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="*" element={<div>page not found 404</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
