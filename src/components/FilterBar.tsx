import React from 'react';
import { Dropdown } from './Dropdown';
import { Checkbox } from './Checkbox';
import { PokemonFilters, REGIONS, TYPES, STAGES, EVOLUTION_STATUS, FORMS } from '../types/filters';

interface FilterBarProps {
  filters: PokemonFilters;
  onFilterChange: (filters: Partial<PokemonFilters>) => void;
}

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  return (
    <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
      <div className="flex flex-wrap gap-4 items-center justify-center mb-4">
        <div className="flex items-center gap-2">
          <span>Generate</span>
          <select
            value={filters.count}
            onChange={(e) => onFilterChange({ count: Number(e.target.value) })}
            className="w-16 border border-gray-300 rounded-md px-2 py-1"
          >
            {[1, 3, 6, 12].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span>Pokémon.</span>
        </div>

        <Dropdown
          value={filters.region}
          options={REGIONS}
          onChange={(region) => onFilterChange({ region })}
        />

        <Dropdown
          value={filters.type}
          options={TYPES}
          onChange={(type) => onFilterChange({ type })}
        />
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center mb-4">
        <Dropdown
          value={filters.legendary}
          options={['All Legendaries', 'Legendary Only', 'Non-Legendary Only']}
          onChange={(legendary) => onFilterChange({ legendary })}
        />

        <Dropdown
          value={filters.stage}
          options={STAGES}
          onChange={(stage) => onFilterChange({ stage })}
        />

        <Dropdown
          value={filters.evolution}
          options={EVOLUTION_STATUS}
          onChange={(evolution) => onFilterChange({ evolution })}
        />
      </div>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        <Checkbox
          label="Sprites"
          checked={filters.showSprites}
          onChange={(showSprites) => onFilterChange({ showSprites })}
        />

        <Checkbox
          label="Natures"
          checked={filters.showNatures}
          onChange={(showNatures) => onFilterChange({ showNatures })}
        />

        <Checkbox
          label="Genders"
          checked={filters.showGenders}
          onChange={(showGenders) => onFilterChange({ showGenders })}
        />

        <Dropdown
          value={filters.form}
          options={FORMS}
          onChange={(form) => onFilterChange({ form })}
        />
      </div>
    </div>
  );
}