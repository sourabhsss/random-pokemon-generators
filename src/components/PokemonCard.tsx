import React from 'react';
import { motion } from 'framer-motion';
import { Pokemon } from '../types/pokemon';
import { Shield, Swords, Heart, Zap } from 'lucide-react';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full"
    >
      <div className="relative">
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-48 h-48 mx-auto"
        />
      </div>

      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold capitalize mb-2">{pokemon.name}</h2>
        <div className="flex justify-center gap-2 mb-4">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          <span className="font-medium">HP: {pokemon.stats.hp}</span>
        </div>
        <div className="flex items-center gap-2">
          <Swords className="w-5 h-5 text-orange-500" />
          <span className="font-medium">Attack: {pokemon.stats.attack}</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-500" />
          <span className="font-medium">Defense: {pokemon.stats.defense}</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          <span className="font-medium">Speed: {pokemon.stats.speed}</span>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600 text-center">
        Generation: {pokemon.generation.replace('generation-', '').toUpperCase()}
      </div>
    </motion.div>
  );
}