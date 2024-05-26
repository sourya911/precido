// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import SellerPage from './pages/SellerPage';
import BuyerPage from './pages/BuyerPage';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <PrivateRoute path="/dashboard" element={<Dashboard />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/buyer" element={<BuyerPage />} />
      </Routes>
    </AuthProvider>
    </Router>
  );
}

export default App;
