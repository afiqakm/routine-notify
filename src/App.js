import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter basename={'/routify'}>
      <Routes>
        <Route path="/" element={<LandingPage />} exact/>
        <Route path="/Login" element={<Login />} exact/>
        <Route path="/Signup" element={<Signup />} exact/>
        <Route path="/Dashboard" element={<Dashboard />} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
