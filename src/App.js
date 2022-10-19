import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
