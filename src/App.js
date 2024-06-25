import React from 'react';
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
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <AuthProvider>
      <Router>
          <Navbar />
            <Routes>
              <Route path="/admin" element={<AdiminPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/doacoes" element={<DoacoesPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/animals" element={<AnimalsPage />} />
              <Route path="/add-animal" element={<AddAnimalPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

