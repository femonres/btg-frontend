import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../components/pages/HomePage';
import FundsPage from '../components/pages/FundsPage';
import TransactionsPage from '../components/pages/TransactionsPage';
import ProfilePage from '../components/pages/ProfilePage';
import NotFoundPage from '../components/pages/NotFoundPage';

const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/funds" element={<FundsPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/user/:userId" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRoutes;