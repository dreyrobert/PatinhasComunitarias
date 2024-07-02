import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AnimalsPage from './pages/AnimalsPage';
import AddAnimalPage from './pages/AddAnimalPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import DoacoesPage from './pages/DoacoesPage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import { useAuth } from './context/AuthContext';


function AppRoutes() {
  const { user } = useAuth();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/doacoes" element={<DoacoesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/animals" element={<AnimalsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/accont" element={<AccountPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/add-animal" element={<AddAnimalPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

      </Routes>
    </Router>
    
  );
}

export default AppRoutes;

{/* {isAuthenticated && user.adm === 1 && <Route path="/admin" element={AdminPage}}
{isAuthenticated && user.adm === 1 && <Route path="/add-animal" element={AddAnimalPage}}
{isAuthenticated && user.adm === 1 && <Route path="/dashboard" element={DashboardPage} /> } */}
