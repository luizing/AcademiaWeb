import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashbord';
import Cadastro from './pages/Cadastro'; // Importando a página de Cadastro

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadastro" element={<Cadastro />} /> {/* Rota para o cadastro */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
