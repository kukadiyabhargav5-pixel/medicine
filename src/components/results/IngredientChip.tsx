interface IngredientChipProps {
  name: string;
  isUnknown?: boolean;
}

export default function IngredientChip({ name, isUnknown }: IngredientChipProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
        isUnknown
          ? 'bg-red-50 text-red-700 border border-red-200'
          : 'bg-primary-50 text-primary-700 border border-primary-200'
      }`}
    >
      {isUnknown && <span className="mr-1">❓</span>}
      {name}
    </span>
  );
}
