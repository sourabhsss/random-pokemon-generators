import { useState, useCallback } from 'react';
import { Pokemon } from '../types/pokemon';
import { PokemonFilters } from '../types/filters';

const MAX_POKEMON_ID = 898; // Up to Generation 8

export function usePokemon() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = useCallback(async (filters?: PokemonFilters) => {
    try {
      setLoading(true);
      setError(null);
      
      const count = filters?.count || 1;
      const pokemonList: Pokemon[] = [];

      for (let i = 0; i < count; i++) {
        const pokemonId = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();

        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();

        const formattedPokemon: Pokemon = {
          id: data.id,
          name: data.name,
          types: data.types.map((type: any) => type.type.name),
          stats: {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
            specialDefense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
          },
          sprites: {
            front_default: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
          },
          generation: speciesData.generation.name,
        };

        pokemonList.push(formattedPokemon);
      }

      setPokemon(pokemonList);
    } catch (err) {
      setError('Failed to fetch Pokémon. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  return { pokemon, loading, error, fetchPokemon };
}