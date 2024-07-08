import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimalsPage from './pages/AnimalsPage';
import AddAnimalPage from './pages/AddAnimalPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import DoacoesPage from './pages/DoacoesPage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';


const RoutesComponent = () => {
  const { token } = React.useContext(AuthContext);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/doacoes" element={<DoacoesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/animals" element={<AnimalsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/accont" element={token ? <AccountPage /> : <Navigate to="/login" />} />
        <Route path="/admin"  element={token ? <AdminPage /> : <Navigate to="/login" />}/>
        <Route path="/add-animal" element={token ? <AddAnimalPage /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={token ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    
  );
}

export default RoutesComponent;
