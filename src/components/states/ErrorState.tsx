import { AlertTriangle, RotateCcw } from 'lucide-react';

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4">
      <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-7 h-7 text-red-500" />
        </div>
        <p className="text-slate-700 text-gujarati text-lg mb-2">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>ફરી પ્રયાસ કરો</span>
          </button>
        )}
      </div>
    </div>
  );
}
