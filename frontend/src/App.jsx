import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProblemList from './pages/ProblemList';
import ProblemDetail from './pages/ProblemDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProblemList />} />
        <Route path="/problems/:id" element={<ProblemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
