import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import RepoDetails from './pages/RepoDetails';

import { useSessionContext } from './contexts/AuthContext';

const AppRouter = () => {

  const { isAuthenticated } = useSessionContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route exact path="/dashboard/:username/repos/:repoName" element={isAuthenticated ? <RepoDetails /> : <Navigate to="/" />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
