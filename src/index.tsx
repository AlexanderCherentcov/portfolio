import React, { Suspense, lazy } from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Preloader from './components/preloader/Preloader';
// Стили
import './style/style.scss';

const Home = lazy(() => import('@/pages/home/Home'));
const Main = lazy(() => import('@/pages/main/Main'));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div>
            <Preloader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />
          <Route path="/main" element={<Main />} />

          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<App />);
