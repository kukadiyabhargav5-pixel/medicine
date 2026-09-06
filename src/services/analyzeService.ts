import api from './api';
import type { AnalysisResponse, ApiResponse } from '../types/analysis';

export async function analyzeMedicine(query: string): Promise<AnalysisResponse> {
  const response = await api.post<ApiResponse<AnalysisResponse>>('/api/analyze', { query });
  return response.data.data;
}

export interface SearchSuggestion {
  genericName: string;
  aliases: string[];
  category: string;
  description: string;
}

export async function searchIngredients(query: string): Promise<SearchSuggestion[]> {
  const response = await api.get('/api/ingredients/search', { params: { q: query } });
  return response.data.results;
}
