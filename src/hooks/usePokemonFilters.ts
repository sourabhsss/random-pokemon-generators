import { useState, useCallback } from 'react';
import { PokemonFilters } from '../types/filters';

const initialFilters: PokemonFilters = {
  count: 1,
  region: 'All Regions',
  type: 'All Types',
  legendary: 'All Legendaries',
  stage: 'All Stages',
  evolution: 'Fully Evolved or Not',
  form: 'All Forms',
  showSprites: true,
  showNatures: false,
  showGenders: false,
};

export function usePokemonFilters() {
  const [filters, setFilters] = useState<PokemonFilters>(initialFilters);

  const updateFilters = useCallback((newFilters: Partial<PokemonFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  return { filters, updateFilters };
}