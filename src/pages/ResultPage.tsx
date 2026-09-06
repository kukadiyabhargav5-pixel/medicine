import { FileText } from 'lucide-react';
import IngredientChip from '../components/results/IngredientChip';
import IngredientCard from '../components/results/IngredientCard';
import CombinationAnalysis from '../components/results/CombinationAnalysis';
import DuplicateWarning from '../components/results/DuplicateWarning';
import SafetyIndicator from '../components/results/SafetyIndicator';
import SourceReferences from '../components/results/SourceReferences';
import MedicalDisclaimer from '../components/results/MedicalDisclaimer';
import type { AnalysisResponse } from '../types/analysis';

interface ResultDashboardProps {
  result: AnalysisResponse;
}

export default function ResultDashboard({ result }: ResultDashboardProps) {
  return (
    <div className="py-4 sm:py-8 space-y-4 sm:space-y-6 animate-fade-in-up">
      {/* Header: Identified Composition */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200/80 p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 flex-shrink-0" />
          <h2 className="text-base sm:text-lg font-bold text-slate-800 text-gujarati">તમારી Medicine Composition</h2>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {result.identifiedIngredients.map((name) => (
            <IngredientChip key={name} name={name} />
          ))}
          {result.unknownIngredients.map((name) => (
            <IngredientChip key={name} name={name} isUnknown />
          ))}
        </div>
        {/* Quick Summary */}
        {result.summaryGujarati && (
          <div className="bg-primary-50/50 border border-primary-100 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <h3 className="text-xs sm:text-sm font-bold text-primary-800 mb-1 text-gujarati">Quick Summary</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-gujarati">
              {result.summaryGujarati}
            </p>
          </div>
        )}
      </div>

      {/* Safety Indicator */}
      <SafetyIndicator level={result.safetyLevel} />

      {/* Duplicate Warning */}
      {result.duplicateIngredientWarning && (
        <DuplicateWarning duplicates={result.duplicateIngredients} />
      )}

      {/* Combination Analysis */}
      {result.combinationAnalysis && (
        <CombinationAnalysis analysis={result.combinationAnalysis} />
      )}

      {/* Individual Ingredient Cards */}
      <div className="space-y-3 sm:space-y-5">
        {result.ingredients.map((ingredient, index) => (
          <IngredientCard key={ingredient.name} ingredient={ingredient} index={index} />
        ))}
      </div>

      {/* Source References */}
      <SourceReferences references={result.sourceReferences} />

      {/* Medical Disclaimer */}
      <MedicalDisclaimer disclaimer={result.disclaimer} />
    </div>
  );
}
