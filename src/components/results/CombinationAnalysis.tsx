import { GitMerge, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import type { CombinationAnalysis as ICombinationAnalysis } from '../../types/analysis';

interface CombinationAnalysisProps {
  analysis: ICombinationAnalysis;
}

export default function CombinationAnalysis({ analysis }: CombinationAnalysisProps) {
  if (!analysis.isCombination) return null;

  return (
    <div className="bg-gradient-to-br from-purple-50/60 to-blue-50/60 border border-purple-200/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
          <GitMerge className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
        </div>
        <h3 className="text-sm sm:text-lg font-bold text-slate-800 text-gujarati">Combination Analysis</h3>
      </div>

      {/* Purpose */}
      <div className="mb-4 sm:mb-5">
        <h4 className="text-xs sm:text-sm font-bold text-slate-700 mb-1.5 sm:mb-2 text-gujarati">
          બંને સાથે શા માટે આપવામાં આવે છે?
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-gujarati">
          {analysis.purpose}
        </p>
      </div>

      {/* Benefits */}
      {analysis.benefits.length > 0 && (
        <div className="mb-4 sm:mb-5">
          <h4 className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-green-700 mb-1.5 sm:mb-2 text-gujarati">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Combinationથી શું benefit મળી શકે?
          </h4>
          <ul className="space-y-1 sm:space-y-1.5 pl-4 sm:pl-6">
            {analysis.benefits.map((b, i) => (
              <li key={i} className="text-xs sm:text-sm text-slate-600 text-gujarati list-disc">
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Risks */}
      {analysis.risks.length > 0 && (
        <div className="mb-4 sm:mb-5">
          <h4 className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-amber-700 mb-1.5 sm:mb-2 text-gujarati">
            <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Combinationમાં શું ધ્યાન રાખવું?
          </h4>
          <ul className="space-y-1 sm:space-y-1.5 pl-4 sm:pl-6">
            {analysis.risks.map((r, i) => (
              <li key={i} className="text-xs sm:text-sm text-slate-600 text-gujarati list-disc">
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Important Warnings */}
      {analysis.importantWarnings.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
          <h4 className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-amber-800 mb-1.5 sm:mb-2 text-gujarati">
            <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Important Warnings
          </h4>
          <ul className="space-y-1 sm:space-y-1.5 pl-4 sm:pl-6">
            {analysis.importantWarnings.map((w, i) => (
              <li key={i} className="text-xs sm:text-sm text-amber-700 text-gujarati list-disc">
                {w}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
