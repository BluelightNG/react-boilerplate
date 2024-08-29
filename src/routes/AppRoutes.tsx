import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '@pages/LoginPage';
import HomePage from '@pages/HomePage';
import PublicRoute from './PublicRoute';
import ProfilePage from '@pages/ProfilePage';
import AboutPage from '@pages/AboutPage';
import Layout from '@components/Layout';

const AppRoutes = () => (
  <Router>
    <Routes>
      {/* Unprotected Routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PublicRoute>
            <AboutPage />
          </PublicRoute>
        }
      />

      {/* Protected Routes */}
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
