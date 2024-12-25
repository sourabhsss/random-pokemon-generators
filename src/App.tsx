import React, { useEffect } from 'react';
import { Dices } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePokemon } from './hooks/usePokemon';
import { usePokemonFilters } from './hooks/usePokemonFilters';
import { PokemonCard } from './components/PokemonCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { FilterBar } from './components/FilterBar';
import { InfoContent } from './components/InfoContent';

export default function App() {
  const { pokemon, loading, error, fetchPokemon } = usePokemon();
  const { filters, updateFilters } = usePokemonFilters();

  useEffect(() => {
    fetchPokemon(filters);
  }, [fetchPokemon, filters.count]);

  const handleGenerate = () => {
    fetchPokemon(filters);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Random Pokémon Generator
          </h1>
          <p className="text-white text-lg opacity-90 max-w-2xl mx-auto">
            Generate random Pokémon teams, discover new favorites, and explore the vast world of Pokémon with our advanced generator tool.
          </p>
        </div>

        <FilterBar filters={filters} onFilterChange={updateFilters} />

        <div className="flex justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGenerate}
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-300 transition-colors"
            disabled={loading}
          >
            <Dices className="w-5 h-5" />
            Generate
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {loading ? (
            <div className="col-span-full flex justify-center">
              <LoadingSpinner />
            </div>
          ) : error ? (
            <div className="col-span-full text-white text-center">
              <p>{error}</p>
              <button
                onClick={handleGenerate}
                className="mt-4 text-yellow-400 underline"
              >
                Try Again
              </button>
            </div>
          ) : (
            pokemon.map((p) => (
              <PokemonCard key={`${p.id}-${p.name}`} pokemon={p} />
            ))
          )}
        </div>

        <InfoContent />
      </div>
    </div>
  );
}