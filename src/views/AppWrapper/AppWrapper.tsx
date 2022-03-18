import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import ComponentA from '../ComponentA';
import ComponentB from '../ComponentB';
import ErrorBoundary from './ErrorBoundary';

const AppWrapper = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="a" element={<ComponentA />} />
            <Route path="b" element={<ComponentB />} />
          </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default AppWrapper;