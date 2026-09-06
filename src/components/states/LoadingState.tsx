import { Search, Scan, ShieldCheck, Languages } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';

const LOADING_STEPS = [
  {
    message: 'Medicine content તપાસી રહ્યા છીએ...',
    icon: Search,
    color: 'from-blue-500 to-blue-600',
  },
  {
    message: 'Ingredients ઓળખી રહ્યા છીએ...',
    icon: Scan,
    color: 'from-teal-500 to-emerald-500',
  },
  {
    message: 'Safety information તૈયાર કરી રહ્યા છીએ...',
    icon: ShieldCheck,
    color: 'from-amber-500 to-orange-500',
  },
  {
    message: 'Gujaratiમાં જવાબ તૈયાર કરી રહ્યા છીએ...',
    icon: Languages,
    color: 'from-purple-500 to-indigo-500',
  },
];

export default function LoadingState() {
  const { loadingStep } = useSearch();
  const currentStep = LOADING_STEPS[loadingStep] || LOADING_STEPS[0];
  const CurrentIcon = currentStep.icon;

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4">
      {/* Main Animation */}
      <div className="text-center mb-10">
        {/* Animated Icon */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          {/* Ripple rings */}
          <div className="absolute inset-0 rounded-full bg-blue-200/30 animate-ripple" />
          <div className="absolute inset-0 rounded-full bg-blue-200/20 animate-ripple" style={{ animationDelay: '0.5s' }} />
          <div className="absolute inset-0 rounded-full bg-blue-200/10 animate-ripple" style={{ animationDelay: '1s' }} />

          {/* Center icon */}
          <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${currentStep.color} flex items-center justify-center shadow-lg transition-all duration-500`}>
            <CurrentIcon className="w-9 h-9 text-white animate-bounce-subtle" />
          </div>
        </div>

        {/* Loading Message */}
        <p className="text-lg font-semibold text-slate-700 text-gujarati transition-all duration-500">
          {currentStep.message}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full progress-shimmer rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${((loadingStep + 1) / LOADING_STEPS.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-center gap-3">
        {LOADING_STEPS.map((step, i) => {
          const StepIcon = step.icon;
          const isActive = i <= loadingStep;
          const isCurrent = i === loadingStep;

          return (
            <div
              key={i}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-500 ${
                isCurrent
                  ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm scale-105'
                  : isActive
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                  : 'bg-slate-50 text-slate-300 border border-slate-100'
              }`}
            >
              <StepIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{i + 1}</span>
            </div>
          );
        })}
      </div>

      {/* Skeleton Preview Cards */}
      <div className="space-y-4 mt-10">
        <div className="skeleton h-8 w-3/4 mx-auto" />
        <div className="skeleton h-32 w-full" />
        <div className="skeleton h-24 w-full" />
        <div className="skeleton h-24 w-full" />
      </div>
    </div>
  );
}
