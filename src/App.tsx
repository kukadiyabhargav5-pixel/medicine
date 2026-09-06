import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import SafetyPage from './pages/SafetyPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
}
