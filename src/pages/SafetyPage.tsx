import { ShieldCheck, AlertTriangle, XCircle, Heart, Shield } from 'lucide-react';

export default function SafetyPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <div className="page-hero py-12 sm:py-16 md:py-20">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6">
            <Shield className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-teal-400" />
            <span className="text-xs sm:text-sm font-semibold text-white/70">Safety Guidelines</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">Safety Information</h1>
          <p className="text-white/50 text-sm sm:text-lg text-gujarati max-w-lg mx-auto">
            આ platform ની safety guidelines અને limitations
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="space-y-4 sm:space-y-6">

          {/* What this platform is */}
          <div className="bg-white border border-emerald-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-md flex-shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-base sm:text-xl font-bold text-slate-800 text-gujarati">આ Platform શું છે</h2>
            </div>
            <div className="bg-emerald-50/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-emerald-700 text-gujarati">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">✅</span>
                  <span>Medicine ના ingredients વિશે સામાન્ય શૈક્ષણિક માહિતી</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">✅</span>
                  <span>Active ingredients ના uses, side effects, precautions ની general information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">✅</span>
                  <span>Combination medicines ની general analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">✅</span>
                  <span>Duplicate ingredient detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">✅</span>
                  <span>Verified medical references પર આધારિત માહિતી</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What this platform is NOT */}
          <div className="bg-white border border-red-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center shadow-md flex-shrink-0">
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-base sm:text-xl font-bold text-slate-800 text-gujarati">આ Platform શું નથી</h2>
            </div>
            <div className="bg-red-50/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-red-700 text-gujarati">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">❌</span>
                  <span>Doctor અથવા pharmacist નો replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">❌</span>
                  <span>Personal medical advice આપતું platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">❌</span>
                  <span>Diagnosis અથવા prescription system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">❌</span>
                  <span>Personalized dose recommendation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">❌</span>
                  <span>Emergency medical service</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Important warnings */}
          <div className="bg-white border border-amber-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-base sm:text-xl font-bold text-slate-800 text-gujarati">મહત્વની સાવચેતી</h2>
            </div>
            <div className="bg-amber-50/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-amber-700 text-gujarati">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">⚠️</span>
                  <span>પોતાની રીતે દવા શરૂ, બંધ અથવા dose બદલશો નહીં.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">⚠️</span>
                  <span>ગંભીર side effects, allergic reaction, અથવા emergency symptoms હોય તો તરત medical help લો.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">⚠️</span>
                  <span>Pregnancy, breastfeeding, અથવા ગંભીર medical condition હોય ત્યારે doctor ની સલાહ વગર દવા ન લો.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">⚠️</span>
                  <span>બાળકો, વૃદ્ધ વ્યક્તિઓ અને chronic disease ધરાવતા દર્દીઓ doctor ના માર્ગદર્શન પ્રમાણે જ દવા લે.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">⚠️</span>
                  <span>અલગ-અલગ medicines combine કરતાં પહેલાં doctor/pharmacist ને પૂછો.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Medical disclaimer */}
          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center shadow-md flex-shrink-0">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-base sm:text-xl font-bold text-slate-700">Medical Disclaimer</h2>
            </div>
            <div className="bg-slate-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-gujarati">
                આ website દ્વારા આપવામાં આવેલી માહિતી માત્ર સામાન્ય શૈક્ષણિક માહિતી માટે છે.
                આ doctor અથવા pharmacistની સલાહનો વિકલ્પ નથી. પોતાની રીતે દવા શરૂ, બંધ અથવા dose બદલશો નહીં.
                જો ગંભીર side effects, allergic reaction અથવા emergency symptoms હોય તો તરત medical help લો.
                દરેક વ્યક્તિની medical history, conditions, અને medicines અલગ છે,
                તેથી આ platform ની general information ને personalized medical advice તરીકે ન લો.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
