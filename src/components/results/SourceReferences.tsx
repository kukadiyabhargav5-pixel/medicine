import { BookOpen, ExternalLink } from 'lucide-react';
import type { SourceReference } from '../../types/analysis';

interface SourceReferencesProps {
  references: SourceReference[];
}

export default function SourceReferences({ references }: SourceReferencesProps) {
  if (references.length === 0) return null;

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-xl sm:rounded-2xl p-4 sm:p-6">
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-200 flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
        </div>
        <h3 className="text-sm sm:text-lg font-bold text-slate-800 text-gujarati">સંદર્ભ (Source References)</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {references.map((ref, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5 sm:mb-1 truncate">{ref.title}</h4>
                {ref.url ? (
                  <a 
                    href={ref.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] sm:text-xs text-blue-500 hover:text-blue-700 flex items-center gap-1 group touch-target inline-flex py-1"
                  >
                    <span className="truncate max-w-[200px]">{new URL(ref.url).hostname}</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-[10px] sm:text-xs text-slate-500">Medical Database</span>
                )}
              </div>
              <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] sm:text-xs font-semibold whitespace-nowrap">
                {ref.organization}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
