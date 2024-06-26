import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AnimalsPage from './pages/AnimalsPage';
import AddAnimalPage from './pages/AddAnimalPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DoacoesPage from './pages/DoacoesPage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import AdiminPage from './pages/AdminPage';
import { AuthContext } from './context/AuthContext';
function AppRoutes() {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
      <Router>
          <Navbar />
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/doacoes" element={<DoacoesPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/animals" element={<AnimalsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              {isAuthenticated && user.adm === 1 && <Route path="/admin" element={<AdiminPage />} />}
              {isAuthenticated && user.adm === 1 && <Route path="/add-animal" element={<AddAnimalPage />} />}
              {isAuthenticated && user.adm === 1 && <Route path="/dashboard" element={<DashboardPage />} /> }
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
      </Router>
  );
}

export default AppRoutes;

