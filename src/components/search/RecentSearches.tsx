import { X, Trash2, History } from 'lucide-react';
import { useSearchHistory } from '../../hooks/useSearchHistory';
import { useAnalysis } from '../../hooks/useAnalysis';
import { useSearch } from '../../context/SearchContext';

export default function RecentSearches() {
  const { history, remove, clear } = useSearchHistory();
  const { analyze } = useAnalysis();
  const { isLoading, setQuery } = useSearch();

  if (history.length === 0) return null;

  return (
    <div className="mt-10 w-full">
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-white/30" />
          <span className="text-sm font-semibold text-white/30 uppercase tracking-wider">Recent</span>
        </div>
        <button
          onClick={clear}
          className="group flex items-center gap-1.5 text-xs font-medium text-white/25 hover:text-red-400 transition-colors duration-300"
          aria-label="Clear all history"
        >
          <Trash2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          <span>Clear</span>
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {history.slice(0, 8).map((item) => (
          <div key={item.timestamp} className="group relative flex items-center bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl pl-4 pr-1 py-1.5 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300">
            <button
              onClick={() => {
                if (!isLoading) {
                  setQuery(item.query);
                  analyze(item.query);
                }
              }}
              disabled={isLoading}
              className="text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors mr-2 truncate max-w-[150px] sm:max-w-[200px]"
            >
              {item.query}
            </button>
            <button
              onClick={() => remove(item.query)}
              className="p-1.5 rounded-lg text-white/15 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              aria-label={`Remove ${item.query} from history`}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
