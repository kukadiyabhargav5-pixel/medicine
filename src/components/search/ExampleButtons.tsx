import { Sparkles, ArrowUpRight } from 'lucide-react';
import { useAnalysis } from '../../hooks/useAnalysis';
import { useSearch } from '../../context/SearchContext';

const examples = [
  'Paracetamol',
  'Pantoprazole',
  'Cetirizine',
  'Aceclofenac + Paracetamol',
  'Amoxicillin + Clavulanic Acid',
];

export default function ExampleButtons() {
  const { analyze } = useAnalysis();
  const { isLoading, setQuery } = useSearch();

  const handleClick = (example: string) => {
    if (!isLoading) {
      setQuery(example);
      analyze(example);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2 mb-5">
        <Sparkles className="w-4 h-4 text-amber-400 animate-pulse-soft" />
        <span className="text-sm font-semibold text-white/40 tracking-widest uppercase">
          Try an example
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {examples.map((example, i) => (
          <button
            key={example}
            onClick={() => handleClick(example)}
            disabled={isLoading}
            className="group relative px-5 py-2.5 text-sm font-medium rounded-2xl transition-all duration-500 disabled:opacity-40 overflow-hidden hover:-translate-y-0.5 animate-fade-in-up bg-white/[0.06] backdrop-blur-sm border border-white/10 text-white/70 hover:bg-white/[0.12] hover:border-white/20 hover:text-white hover:shadow-lg hover:shadow-blue-500/10"
            style={{ animationDelay: `${0.05 * i}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-2">
              {example}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
