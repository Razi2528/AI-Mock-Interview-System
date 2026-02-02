import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from '@/pages/LandingPage';
import { LoginPage } from '@/pages/LoginPage';
import { SignupPage } from '@/pages/SignupPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { PracticePage } from '@/pages/PracticePage';
import { SessionsPage } from '@/pages/SessionsPage';
import { AnalyticsPage } from '@/pages/AnalyticsPage';
import { ResumePage } from '@/pages/ResumePage';
import { SettingsPage } from '@/pages/SettingsPage';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/sessions" element={<SessionsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/me" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

