import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { AnalysisResponse } from '../types/analysis';

interface SearchContextType {
  query: string;
  setQuery: (q: string) => void;
  result: AnalysisResponse | null;
  setResult: (r: AnalysisResponse | null) => void;
  isLoading: boolean;
  setIsLoading: (l: boolean) => void;
  error: string | null;
  setError: (e: string | null) => void;
  loadingStep: number;
  setLoadingStep: (s: number) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<AnalysisResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);

  return (
    <SearchContext.Provider value={{
      query, setQuery,
      result, setResult,
      isLoading, setIsLoading,
      error, setError,
      loadingStep, setLoadingStep,
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
