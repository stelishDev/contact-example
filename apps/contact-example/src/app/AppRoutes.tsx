import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Redirect to dashboard if the route isn't found */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
