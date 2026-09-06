import { AlertTriangle } from 'lucide-react';

interface DuplicateWarningProps {
  duplicates: string[];
}

export default function DuplicateWarning({ duplicates }: DuplicateWarningProps) {
  if (duplicates.length === 0) return null;

  return (
    <div className="bg-red-50 border-2 border-red-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 animate-fade-in-up">
      <div className="flex items-start gap-2.5 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm sm:text-lg font-bold text-red-800 mb-1">
            ⚠️ Duplicate Ingredient Detected
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            {duplicates.map((name) => (
              <span key={name} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-semibold">
                {name}
              </span>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-red-700 text-gujarati leading-relaxed">
            આ compositionમાં એક જ active ingredient એકથી વધુ વખત જોવા મળે છે.
            બીજી medicines સાથે પણ આ ingredient duplicate થઈ શકે છે,
            તેથી doctor અથવા pharmacistની સલાહ વગર medicines combine ન કરો.
          </p>
        </div>
      </div>
    </div>
  );
}
