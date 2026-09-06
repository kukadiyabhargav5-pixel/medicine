import { Sparkles } from 'lucide-react';
import SearchBar from '../components/search/SearchBar';
import LoadingState from '../components/states/LoadingState';
import ErrorState from '../components/states/ErrorState';
import ResultDashboard from './ResultPage';
import { useSearch } from '../context/SearchContext';
import { useAnalysis } from '../hooks/useAnalysis';

export default function HomePage() {
  const { isLoading, error, result, query } = useSearch();
  const { analyze } = useAnalysis();

  const isSearchingOrResult = isLoading || result || error;

  return (
    <div className="home-page-wrapper">

      {/* ══════════════════════════════════════
          CLEAN THEMED HERO SECTION
          ══════════════════════════════════════ */}
      <section className="home-hero-section">
        
        {/* Background Elements */}
        {!isSearchingOrResult && (
          <>
            {/* Minimalist Light Grid */}
            <div className="home-bg-grid"></div>
          </>
        )}

        {/* Center Content */}
        <div className={`home-content-container ${isSearchingOrResult ? 'is-searching' : ''}`}>

          {!isSearchingOrResult && (
            <div className="home-text-block">
              
              {/* Premium Badge - Matching outline style */}
              <div className="home-badge-wrapper">
                <div className="home-badge">
                  <Sparkles className="home-badge-icon" />
                  <span className="home-badge-text">
                    AI-Powered Medical Analysis
                  </span>
                </div>
              </div>

              {/* Main Heading - Clean & Centered */}
              <h1 className="home-title text-gujarati">
                <span className="home-title-main">
                  દવાની સંપૂર્ણ માહિતી
                </span>
                <span className="home-title-highlight">
                  સરળ ગુજરાતીમાં સમજો
                </span>
              </h1>

              {/* Subtitle */}
              <p className="home-subtitle text-gujarati">
                દવાનું Brand નામ અથવા Active Ingredients લખો. અમારી સિસ્ટમ તરત જ તમને દવાના ઉપયોગ, 
                સાઇડ ઇફેક્ટ્સ અને સાવચેતીની સચોટ માહિતી પ્રદાન કરશે.
              </p>

              {/* Search Bar Container - Generous spacing */}
              <div className="home-search-wrapper">
                <SearchBar />
              </div>

            </div>
          )}

          {/* Results Area */}
          <div className="home-results-area">
            {isLoading && (
              <div className="animate-scale-in">
                <LoadingState />
              </div>
            )}

            {error && (
              <div className="animate-scale-in">
                <ErrorState
                  message={error}
                  onRetry={query ? () => analyze(query) : undefined}
                />
              </div>
            )}

            {result && !isLoading && (
              <div className="home-results-content animate-scale-in">
                <ResultDashboard result={result} />
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
