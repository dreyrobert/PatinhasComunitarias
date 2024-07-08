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
import AdminPage from './pages/AdminPage';

function AppRoutes() {
  return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
            <Routes>"
              <Route path="/about" element={<AboutPage />} />
              <Route path="/doacoes" element={<DoacoesPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/animals" element={<AnimalsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/add-animal" element={<AddAnimalPage />} />
              <Route path="/dashboard" element={<DashboardPage />} /> 
            </Routes>
            </div>
      </Router>
  );
}

export default AppRoutes;

