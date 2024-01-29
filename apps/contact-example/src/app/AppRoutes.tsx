import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage';
import { Form1 } from './pages/Form1/Form1';
import { Form2 } from './pages/Form2/Form2';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/form1" element={<Form1 />}/>
      <Route path="/form2" element={<Form2 />}/>
      {/* Redirect to dashboard if the route isn't found */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
