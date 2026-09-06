import { useState } from 'react';
import {
  Info, Stethoscope, Cog, AlertCircle, AlertTriangle,
  Shield, Zap, ChevronDown, ChevronUp
} from 'lucide-react';
import type { AnalysisIngredient } from '../../types/analysis';

interface IngredientCardProps {
  ingredient: AnalysisIngredient;
  index: number;
}

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'warning' | 'danger';
}

function Section({ icon, title, children, variant = 'default' }: SectionProps) {
  const bgColors = {
    default: 'bg-white',
    warning: 'bg-amber-50/50',
    danger: 'bg-red-50/50',
  };
  const borderColors = {
    default: 'border-slate-100',
    warning: 'border-amber-100',
    danger: 'border-red-100',
  };

  return (
    <div className={`${bgColors[variant]} border ${borderColors[variant]} rounded-lg sm:rounded-xl p-3 sm:p-5`}>
      <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
        {icon}
        <h4 className="text-sm sm:text-base font-bold text-slate-800 text-gujarati">{title}</h4>
      </div>
      {children}
    </div>
  );
}

function ListItems({ items, variant = 'default' }: { items: string[]; variant?: 'default' | 'warning' | 'danger' }) {
  const bulletColors = {
    default: 'text-primary-400',
    warning: 'text-amber-400',
    danger: 'text-red-400',
  };

  if (items.length === 0) return <p className="text-xs sm:text-sm text-slate-400 italic text-gujarati">માહિતી ઉપલબ્ધ નથી</p>;

  return (
    <ul className="space-y-1 sm:space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600 text-gujarati">
          <span className={`${bulletColors[variant]} mt-1 sm:mt-1.5 flex-shrink-0`}>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function IngredientCard({ ingredient, index }: IngredientCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const isUnknown = ingredient.uses.length === 0 && ingredient.whatIsIt.includes('વિશ્વસનીય માહિતી');

  return (
    <div
      className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-3 sm:px-6 py-3 sm:py-5 bg-gradient-to-r from-slate-50 to-white hover:from-primary-50/30 hover:to-white transition-colors touch-target"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ${
            isUnknown ? 'bg-red-100' : 'bg-primary-100'
          }`}>
            <Stethoscope className={`w-4 h-4 sm:w-5 sm:h-5 ${isUnknown ? 'text-red-600' : 'text-primary-600'}`} />
          </div>
          <h3 className="text-base sm:text-xl font-bold text-slate-800 truncate">{ingredient.name}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 ml-2" />
        ) : (
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 ml-2" />
        )}
      </button>

      {/* Content */}
      {isExpanded && (
        <div className="px-3 sm:px-6 pb-3 sm:pb-6 space-y-3 sm:space-y-4">
          {/* What is it */}
          <Section
            icon={<Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500" />}
            title="આ શું છે?"
          >
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-gujarati">
              {ingredient.whatIsIt}
            </p>
          </Section>

          {/* Don't render more sections for unknown ingredients */}
          {!isUnknown && (
            <>
              {/* Uses */}
              {ingredient.uses.length > 0 && (
                <Section
                  icon={<Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-medical-600" />}
                  title="શા માટે વપરાય છે?"
                >
                  <ListItems items={ingredient.uses} />
                </Section>
              )}

              {/* How it works */}
              {ingredient.howItWorks && (
                <Section
                  icon={<Cog className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" />}
                  title="તે કેવી રીતે કામ કરે છે?"
                >
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-gujarati">
                    {ingredient.howItWorks}
                  </p>
                </Section>
              )}

              {/* Common Side Effects */}
              {ingredient.commonSideEffects.length > 0 && (
                <Section
                  icon={<AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />}
                  title="સામાન્ય Side Effects"
                  variant="warning"
                >
                  <ListItems items={ingredient.commonSideEffects} variant="warning" />
                </Section>
              )}

              {/* Serious Side Effects */}
              {ingredient.seriousSideEffects.length > 0 && (
                <Section
                  icon={<AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />}
                  title="ગંભીર Side Effects"
                  variant="danger"
                >
                  <ListItems items={ingredient.seriousSideEffects} variant="danger" />
                  <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-red-600 font-medium text-gujarati">
                    ⚠️ ઉપરોક્ત ગંભીર side effects જોવા મળે તો તરત doctor ની સલાહ લો.
                  </p>
                </Section>
              )}

              {/* Precautions */}
              {ingredient.precautions.length > 0 && (
                <Section
                  icon={<Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />}
                  title="સાવચેતી"
                  variant="warning"
                >
                  <ListItems items={ingredient.precautions} variant="warning" />
                </Section>
              )}

              {/* Interactions */}
              {ingredient.interactions.length > 0 && (
                <Section
                  icon={<Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />}
                  title="Drug Interactions"
                >
                  <ListItems items={ingredient.interactions} />
                  <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-slate-500 text-gujarati">
                    Interaction વિશે ચોક્કસ માહિતી માટે pharmacist/doctor ની સલાહ લો.
                  </p>
                </Section>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
