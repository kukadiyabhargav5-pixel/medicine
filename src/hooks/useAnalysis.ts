import { useCallback, useRef } from 'react';
import { useSearch } from '../context/SearchContext';
import { analyzeMedicine } from '../services/analyzeService';
import { addToHistory } from '../services/historyService';

const LOADING_MESSAGES = [
  'Medicine content તપાસી રહ્યા છીએ...',
  'Ingredients ઓળખી રહ્યા છીએ...',
  'Safety information તૈયાર કરી રહ્યા છીએ...',
  'Gujaratiમાં જવાબ તૈયાર કરી રહ્યા છીએ...',
];

export function useAnalysis() {
  const {
    setResult, setIsLoading, setError, setLoadingStep, setQuery,
  } = useSearch();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startLoadingSteps = useCallback(() => {
    let step = 0;
    setLoadingStep(0);
    intervalRef.current = setInterval(() => {
      step = Math.min(step + 1, LOADING_MESSAGES.length - 1);
      setLoadingStep(step);
    }, 1200);
  }, [setLoadingStep]);

  const stopLoadingSteps = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const analyze = useCallback(async (query: string) => {
    if (!query.trim()) {
      setError('કૃપા કરીને medicineનું content લખો.');
      return;
    }

    setQuery(query);
    setResult(null);
    setError(null);
    setIsLoading(true);
    startLoadingSteps();

    try {
      const result = await analyzeMedicine(query.trim());
      setResult(result);
      addToHistory(query.trim());
    } catch (err) {
      const message = err instanceof Error ? err.message : 
        'હાલમાં analysis કરવામાં સમસ્યા આવી છે. કૃપા કરીને થોડા સમય પછી ફરી પ્રયાસ કરો.';
      setError(message);
    } finally {
      setIsLoading(false);
      stopLoadingSteps();
    }
  }, [setQuery, setResult, setError, setIsLoading, startLoadingSteps, stopLoadingSteps]);

  return { analyze, loadingMessages: LOADING_MESSAGES };
}
