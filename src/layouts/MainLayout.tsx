import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, Pill, Heart } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/safety', label: 'Safety' },
  { to: '/about', label: 'About' },
];

export default function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf5f7]">
      {/* Clean Navbar */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#faf5f7]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group touch-target" aria-label="Medicine Content Analyzer Home">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#831843] text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                <Pill className="w-5 h-5 transform group-hover:-rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex flex-col justify-center hidden sm:flex">
                <h1 className="text-xl font-black leading-tight text-[#831843] tracking-tight">
                  MedContent
                </h1>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
                  Analyzer
                </span>
              </div>
            </Link>

            {/* Desktop Nav - Custom Outline Buttons */}
            <nav className="hidden md:flex items-center gap-3">
              {navLinks.map(link => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border-[2.5px] ${
                      isActive
                        ? 'bg-[#831843] border-[#831843] text-white shadow-md scale-105'
                        : 'bg-transparent border-[#831843] text-[#831843] hover:bg-[#831843] hover:text-white hover:shadow-md'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-xl border-[2.5px] border-[#831843] text-[#831843] bg-transparent hover:bg-[#831843] hover:text-white transition-colors touch-target"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav overlay */}
        <div className={`md:hidden fixed inset-0 top-[72px] z-40 bg-[#faf5f7] transition-all duration-300 ease-in-out border-t border-slate-200 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          <div className="flex flex-col h-full pt-8 px-6 pb-8">
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map(link => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-6 py-4 rounded-xl text-lg font-bold transition-all duration-300 border-[2.5px] flex items-center justify-between ${
                      isActive
                        ? 'bg-[#831843] border-[#831843] text-white shadow-md'
                        : 'bg-transparent border-[#831843] text-[#831843] hover:bg-[#831843] hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && <div className="w-2 h-2 rounded-full bg-white" />}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full relative z-0 flex flex-col pt-[88px]">
        <Outlet />
      </main>

      {/* Footer (only for non-home pages) */}
      {!isHomePage && (
        <footer className="bg-[#faf5f7] border-t border-slate-200 mt-auto safe-bottom z-10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="flex items-center gap-3 text-[#831843]">
                <div className="w-8 h-8 rounded-xl bg-[#831843] flex items-center justify-center flex-shrink-0">
                  <Pill className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">MedContent Analyzer</h3>
                  <p className="text-xs text-slate-500">Powered by Gemini AI</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-[#831843] bg-transparent px-4 py-2 rounded-xl border-[2.5px] border-[#831843]">
                <span className="font-semibold">Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse-soft" />
                <span className="font-semibold">for healthcare</span>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
