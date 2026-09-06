import { Search, Database, Cpu, FileText, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: Search,
    titleEn: 'Enter Medicine Content',
    titleGu: 'Medicine નું Content લખો',
    description: 'Medicine ના active ingredients અથવા composition search box માં લખો. Single ingredient અથવા combination (+ sign સાથે) બંને support થાય છે.',
    gradient: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    icon: Database,
    titleEn: 'Ingredient Identification',
    titleGu: 'Ingredients ઓળખવામાં આવે છે',
    description: 'System ingredients ને verified medical database સાથે match કરે છે. Dosage text, pharmacopoeia suffixes, અને common aliases automatically handle થાય છે.',
    gradient: 'from-teal-500 to-emerald-500',
    iconBg: 'bg-teal-50',
  },
  {
    icon: Cpu,
    titleEn: 'Analysis & Safety Check',
    titleGu: 'Analysis અને Safety Check',
    description: 'દરેક ingredient ની uses, side effects, precautions, interactions ની તપાસ થાય છે. Duplicate ingredients અને combination risks ચકાસવામાં આવે છે.',
    gradient: 'from-purple-500 to-indigo-500',
    iconBg: 'bg-purple-50',
  },
  {
    icon: FileText,
    titleEn: 'Gujarati Explanation',
    titleGu: 'Gujarati માં સમજૂતી',
    description: 'બધી medical information સરળ Gujarati ભાષામાં convert થાય છે, જે સામાન્ય વ્યક્તિ સરળતાથી સમજી શકે.',
    gradient: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-50',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <div className="page-hero py-12 sm:py-16 md:py-20">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6">
            <Zap className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blue-400" />
            <span className="text-xs sm:text-sm font-semibold text-white/70">Step-by-Step Guide</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">How It Works</h1>
          <p className="text-white/50 text-sm sm:text-lg text-gujarati max-w-lg mx-auto">
            Medicine Content Analyzer કેવી રીતે કામ કરે છે તે સમજો
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="space-y-4 sm:space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group flex gap-3 sm:gap-5 items-start bg-white rounded-xl sm:rounded-2xl border border-slate-100 p-4 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 feature-glow animate-slide-up-stagger"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Step icon & number */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-6 sm:h-10 bg-gradient-to-b from-slate-200 to-transparent mt-2" />
                )}
              </div>
              {/* Content */}
              <div className="pt-0.5 sm:pt-1 min-w-0">
                <span className="text-[10px] sm:text-xs font-bold text-blue-500 uppercase tracking-wider">Step {i + 1}</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 mt-0.5 sm:mt-1">{step.titleEn}</h3>
                <p className="text-xs sm:text-sm font-medium text-primary-600 mb-1.5 sm:mb-2 text-gujarati">{step.titleGu}</p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-gujarati">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-500 group touch-target"
          >
            <Search className="w-4 h-4" />
            <span className="text-gujarati">Medicine Search કરો</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
