import { ShieldCheck, ShieldAlert, Shield } from 'lucide-react';

interface SafetyIndicatorProps {
  level: 'low' | 'moderate' | 'high';
}

const config = {
  low: {
    label: '🟢 સામાન્ય સાવચેતી',
    description: 'સામાન્ય medical information પર આધારિત. આ વ્યક્તિગત medical risk assessment નથી.',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-800',
    icon: ShieldCheck,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
  },
  moderate: {
    label: '🟡 સાવચેતી જરૂરી',
    description: 'આ indicator સામાન્ય medical information પર આધારિત છે. વ્યક્તિગત medical history અને અન્ય medicines પ્રમાણે risk અલગ હોઈ શકે છે.',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-800',
    icon: Shield,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
  },
  high: {
    label: '🔴 ખાસ સાવચેતી',
    description: 'આ indicator સામાન્ય medical information પર આધારિત છે. Doctor અથવા pharmacist ની સલાહ ખાસ ભલામણ છે.',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-800',
    icon: ShieldAlert,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-100',
  },
};

export default function SafetyIndicator({ level }: SafetyIndicatorProps) {
  const c = config[level];
  const Icon = c.icon;

  return (
    <div className={`${c.bgColor} ${c.borderColor} border rounded-xl sm:rounded-2xl p-4 sm:p-6`}>
      <div className="flex items-start gap-2.5 sm:gap-3">
        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${c.iconColor}`} />
        </div>
        <div className="min-w-0">
          <h3 className={`text-sm sm:text-lg font-bold ${c.textColor} text-gujarati`}>
            {c.label}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5 sm:mt-1 text-gujarati">
            {c.description}
          </p>
        </div>
      </div>
    </div>
  );
}
