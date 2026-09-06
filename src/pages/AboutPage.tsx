import { Pill, Users, Shield, Database, Info, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Pill,
    title: 'Medicine Content Analysis',
    description: 'Active ingredients ને identify કરી, uses, side effects, mechanism, precautions ની information.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'સરળ Gujarati ભાષા',
    description: 'Medical information ને સામાન્ય વ્યક્તિ સમજે તેવી સરળ Gujarati ભાષામાં explain.',
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Safety First Approach',
    description: 'Combination analysis, duplicate detection, interaction warnings, safety indicators.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Database,
    title: 'Verified Information',
    description: 'WHO, BNF, FDA જેવા reliable medical references પર આધારિત માહિતી.',
    gradient: 'from-purple-500 to-indigo-500',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <div className="page-hero py-12 sm:py-16 md:py-20">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6">
            <Info className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-purple-400" />
            <span className="text-xs sm:text-sm font-semibold text-white/70">About Us</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">About</h1>
          <p className="text-white/50 text-sm sm:text-lg text-gujarati max-w-lg mx-auto">
            Medicine Content Analyzer વિશે
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">

        {/* Mission */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-blue-100">
          <h2 className="text-base sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 text-gujarati">અમારો ઉદ્દેશ</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-gujarati">
            ઘણા લોકો medicine ના packaging પર લખેલા active ingredients અથવા composition ને
            સમજી શકતા નથી. "Aceclofenac", "Pantoprazole" જેવા નામ જોઈને ઘણા લોકો confuse થાય છે.
            Medicine Content Analyzer નો ઉદ્દેશ એ છે કે medicine ના ingredients ની
            general information સરળ Gujarati ભાષામાં ઉપલબ્ધ કરાવવી,
            જેથી દર્દીઓ doctor/pharmacist ને વધુ informed questions પૂછી શકે.
          </p>
          <p className="text-[10px] sm:text-xs text-slate-500 mt-2 sm:mt-3 text-gujarati">
            ⚕️ આ platform doctor/pharmacist ના replacement નથી - માત્ર educational information છે.
          </p>
        </div>

        {/* Features */}
        <h2 className="text-base sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 feature-glow animate-slide-up-stagger"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <f.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-1">{f.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 text-gujarati">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Founder */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-medical-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">BK</span>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-primary-400 font-semibold mb-0.5 sm:mb-1 tracking-wider uppercase text-[10px] sm:text-sm">Founder & Creator</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Bhargav Kukadiya</h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-lg text-gujarati">
                આ પ્રોજેક્ટ દર્દીઓને તેમની દવાની સાચી માહિતી સરળ ભાષામાં મળી રહે તે ઉદ્દેશ્યથી બનાવવામાં આવ્યો છે.
              </p>
            </div>
          </div>
        </div>

        {/* Tech */}
        <div className="bg-white border border-slate-100 shadow-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 mb-6 sm:mb-8">
          <h2 className="text-sm sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Vite', 'Gemini AI'].map(t => (
              <span key={t} className="px-3 sm:px-4 py-1 sm:py-1.5 bg-slate-50 border border-slate-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-colors rounded-full text-xs sm:text-sm font-medium text-slate-600">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
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
