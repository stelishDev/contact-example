import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { AppLayout } from './components/layout/AppLayout';

export function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
