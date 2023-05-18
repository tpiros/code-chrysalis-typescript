import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import TeamIndex from './components/Team';
import PlayerIndex from './components/Player';

const Home = lazy(() => import('./components/Home'));
const Teams = lazy(() => import('./components/Teams'));

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>... Loading ...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/teams"
          element={
            <Suspense fallback={<>... Loading ...</>}>
              <Teams />
            </Suspense>
          }
        />
        <Route
          path="/teams/:id"
          element={
            <Suspense fallback={<>... Loading ...</>}>
              <TeamIndex />
            </Suspense>
          }
        />
        <Route
          path="teams/:id/players/:playerId"
          element={
            <Suspense fallback={<>... Loading ...</>}>
              <PlayerIndex />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
