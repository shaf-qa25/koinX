import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TaxHarvesting from './pages/TaxHarvesting';
import NotFound from './pages/NotFound';
import { TaxProvider } from './hooks/TaxContext';

function App() {
  return (
    <TaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TaxHarvesting />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </TaxProvider>
  );
}

export default App;