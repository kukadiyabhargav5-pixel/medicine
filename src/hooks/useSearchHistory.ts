import { useState, useCallback } from 'react';
import {
  getSearchHistory,
  addToHistory,
  removeFromHistory,
  clearHistory,
} from '../services/historyService';
import type { SearchHistoryItem } from '../services/historyService';

export function useSearchHistory() {
  const [history, setHistory] = useState<SearchHistoryItem[]>(getSearchHistory);

  const refresh = useCallback(() => {
    setHistory(getSearchHistory());
  }, []);

  const add = useCallback((query: string) => {
    addToHistory(query);
    refresh();
  }, [refresh]);

  const remove = useCallback((query: string) => {
    removeFromHistory(query);
    refresh();
  }, [refresh]);

  const clear = useCallback(() => {
    clearHistory();
    refresh();
  }, [refresh]);

  return { history, add, remove, clear, refresh };
}
