const STORAGE_KEY = 'mca_search_history';
const MAX_HISTORY = 20;

export interface SearchHistoryItem {
  query: string;
  timestamp: number;
}

export function getSearchHistory(): SearchHistoryItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function addToHistory(query: string): void {
  try {
    let history = getSearchHistory();
    // Remove duplicate if exists
    history = history.filter(item => item.query.toLowerCase() !== query.toLowerCase());
    // Add to front
    history.unshift({ query, timestamp: Date.now() });
    // Limit size
    history = history.slice(0, MAX_HISTORY);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // Silently fail if localStorage is unavailable
  }
}

export function removeFromHistory(query: string): void {
  try {
    let history = getSearchHistory();
    history = history.filter(item => item.query.toLowerCase() !== query.toLowerCase());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // Silently fail
  }
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Silently fail
  }
}
