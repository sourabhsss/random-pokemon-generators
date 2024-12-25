export interface PokemonFilters {
  count: number;
  region: string;
  type: string;
  legendary: string;
  stage: string;
  evolution: string;
  form: string;
  showSprites: boolean;
  showNatures: boolean;
  showGenders: boolean;
}

export const REGIONS = ['All Regions', 'Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar'];
export const TYPES = ['All Types', 'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'];
export const STAGES = ['All Stages', 'Basic', 'Stage 1', 'Stage 2'];
export const EVOLUTION_STATUS = ['Fully Evolved or Not', 'Fully Evolved', 'Not Fully Evolved'];
export const FORMS = ['All Forms', 'Normal', 'Regional', 'Mega', 'Gigantamax'];