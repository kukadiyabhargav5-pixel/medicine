import { useState, useRef, useEffect } from 'react';
import { Search, X, Loader2, ArrowRight, Sparkles, Pill } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { useAnalysis } from '../../hooks/useAnalysis';
import { searchIngredients } from '../../services/analyzeService';
import type { SearchSuggestion } from '../../services/analyzeService';

export default function SearchBar() {
  const { query, setQuery, isLoading, result, error } = useSearch();
  const { analyze } = useAnalysis();
  const [localQuery, setLocalQuery] = useState(query);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isSearchingOrResult = isLoading || result || error;

  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  // Debounced search for suggestions
  useEffect(() => {
    const fetchSuggestions = async () => {
      const q = localQuery.trim();
      if (!q || q.length < 2) {
        setSuggestions([]);
        setIsDropdownOpen(false);
        return;
      }

      setIsSearching(true);
      try {
        const terms = q.split('+').map(t => t.trim());
        const lastTerm = terms[terms.length - 1];

        if (lastTerm.length >= 2) {
          const results = await searchIngredients(lastTerm);
          setSuggestions(results);
          setIsDropdownOpen(results.length > 0);
        } else {
          setSuggestions([]);
          setIsDropdownOpen(false);
        }
      } catch (error) {
        console.error('Failed to fetch suggestions', error);
      } finally {
        setIsSearching(false);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [localQuery]);

  // Handle clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (localQuery.trim() && !isLoading) {
      setIsDropdownOpen(false);
      analyze(localQuery.trim());
    }
  };

  const handleClear = () => {
    setLocalQuery('');
    setQuery('');
    setSuggestions([]);
    setIsDropdownOpen(false);
    inputRef.current?.focus();
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    const terms = localQuery.split('+').map(t => t.trim());
    terms[terms.length - 1] = suggestion.genericName;
    const newQuery = terms.join(' + ');

    setLocalQuery(newQuery);
    setIsDropdownOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="w-full relative group">
      <form onSubmit={handleSubmit} role="search" className="w-full relative z-20">
        
        {/* Professional Input Container - Themed Border */}
        <div className={`relative rounded-2xl flex items-center p-2.5 transition-all duration-300 bg-white border-[2.5px] shadow-sm ${
          isFocused || isSearchingOrResult
            ? 'border-[#831843] ring-4 ring-[#831843]/10 shadow-md'
            : 'border-[#831843] group-hover:shadow-md'
        }`}>

          {/* Icon */}
          <div className="pl-4 pr-3 flex-shrink-0">
            {isSearching ? (
              <Loader2 className="w-6 h-6 animate-spin text-[#831843]" />
            ) : (
              <Search className={`w-6 h-6 transition-colors duration-300 ${isFocused ? 'text-[#831843]' : 'text-[#831843]/60 group-hover:text-[#831843]'}`} />
            )}
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={localQuery}
            onChange={(e) => {
              setLocalQuery(e.target.value);
              setIsDropdownOpen(true);
            }}
            onFocus={() => {
              setIsFocused(true);
              if (suggestions.length > 0) setIsDropdownOpen(true);
            }}
            onBlur={() => setIsFocused(false)}
            placeholder="દવાનું નામ (Brand) અથવા Ingredients લખો..."
            className="flex-1 w-full bg-transparent border-none outline-none text-lg sm:text-xl font-bold px-2 py-3 text-[#831843] placeholder-[#831843]/40 transition-colors duration-300 text-gujarati"
            aria-label="Medicine content input"
            disabled={isLoading}
            autoComplete="off"
          />

          {/* Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {localQuery && (
              <button
                type="button"
                onClick={handleClear}
                className="p-2 rounded-xl text-[#831843]/60 hover:text-[#831843] hover:bg-[#faf5f7] transition-colors duration-200"
                aria-label="Clear input"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            {/* Desktop Analyze Button - Themed Outline */}
            <button
              type="submit"
              disabled={isLoading || !localQuery.trim()}
              className="hidden sm:flex items-center justify-center h-12 sm:h-14 px-8 rounded-xl font-bold text-base transition-all duration-300 border-[2.5px] border-[#831843] bg-transparent text-[#831843] hover:bg-[#831843] hover:text-white disabled:border-slate-300 disabled:text-slate-400 disabled:bg-transparent disabled:cursor-not-allowed hover:shadow-lg hover:-translate-y-0.5 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <span className="flex items-center gap-2">
                  Analyze
                  <ArrowRight className="w-5 h-5" />
                </span>
              )}
            </button>

            {/* Mobile Analyze Button */}
            <button
              type="submit"
              disabled={isLoading || !localQuery.trim()}
              className="sm:hidden flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 border-[2.5px] border-[#831843] bg-transparent text-[#831843] hover:bg-[#831843] hover:text-white disabled:border-slate-300 disabled:text-slate-400 disabled:bg-transparent disabled:cursor-not-allowed shadow-sm"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Autocomplete Dropdown - Professional Style */}
      {isDropdownOpen && suggestions.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-3 rounded-2xl border-[2.5px] border-[#831843] bg-white shadow-2xl z-30 overflow-hidden animate-fade-in-up origin-top transform transition-all duration-200"
          style={{ animationDuration: '0.2s' }}
        >
          <div className="px-5 py-3 border-b-2 border-slate-100 bg-[#faf5f7] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#831843]" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#831843]/70">
              Suggestions
            </span>
          </div>
          
          <ul className="max-h-80 overflow-y-auto py-2">
            {suggestions.map((suggestion, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-5 py-4 flex items-start gap-4 transition-colors duration-200 hover:bg-[#faf5f7] border-b border-slate-100 last:border-0"
                >
                  <div className="mt-0.5 p-2.5 rounded-xl bg-[#831843] text-white flex-shrink-0">
                    <Pill className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#831843]">
                      {suggestion.genericName}
                    </h4>
                    {suggestion.aliases && suggestion.aliases.length > 0 && (
                      <p className="text-sm mt-1 text-slate-600">
                        <span className="font-semibold text-slate-400">Brands:</span>{' '}
                        {suggestion.aliases.join(', ')}
                      </p>
                    )}
                    <span className="inline-block mt-2 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-600">
                      {suggestion.category}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
