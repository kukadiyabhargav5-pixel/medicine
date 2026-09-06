export interface SourceReference {
  title: string;
  organization: string;
  url?: string;
}

export interface AnalysisIngredient {
  name: string;
  whatIsIt: string;
  uses: string[];
  howItWorks: string;
  commonSideEffects: string[];
  seriousSideEffects: string[];
  precautions: string[];
  interactions: string[];
}

export interface CombinationAnalysis {
  isCombination: boolean;
  purpose: string;
  benefits: string[];
  risks: string[];
  importantWarnings: string[];
}

export interface AnalysisResponse {
  originalQuery: string;
  identifiedIngredients: string[];
  unknownIngredients: string[];
  summaryGujarati: string;
  ingredients: AnalysisIngredient[];
  combinationAnalysis: CombinationAnalysis | null;
  duplicateIngredientWarning: boolean;
  duplicateIngredients: string[];
  safetyLevel: 'low' | 'moderate' | 'high';
  doctorConsultationRecommended: boolean;
  disclaimer: string;
  sourceReferences: SourceReference[];
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: {
    message: string;
    details?: string;
  };
}
