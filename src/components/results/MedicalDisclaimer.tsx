import { ShieldAlert } from 'lucide-react';

interface MedicalDisclaimerProps {
  disclaimer: string;
}

export default function MedicalDisclaimer({ disclaimer }: MedicalDisclaimerProps) {
  return (
    <div className="bg-amber-50/60 border border-amber-200/60 rounded-xl sm:rounded-2xl p-4 sm:p-6">
      <div className="flex items-start gap-2 sm:gap-3">
        <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="min-w-0">
          <h4 className="text-xs sm:text-sm font-bold text-amber-800 mb-0.5 sm:mb-1">⚕️ Medical Disclaimer</h4>
          <p className="text-xs sm:text-sm text-amber-700 leading-relaxed text-gujarati">
            {disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
