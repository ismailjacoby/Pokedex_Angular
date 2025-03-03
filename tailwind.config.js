/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        normal: '#a8a77a',
        fire: '#ee8130',
        water: '#6390f0',
        electric: '#f7d02c',
        grass: '#7ac74c',
        ice: '#96d9d6',
        fighting: '#c22e28',
        poison: '#a33ea1',
        ground: '#e2bf65',
        flying: '#a98ff3',
        psychic: '#f95587',
        bug: '#a6b91a',
        rock: '#b6a136',
        ghost: '#735797',
        dragon: '#6f35fc',
        dark: '#705746',
        steel: '#b7b7ce',
        fairy: '#d685ad',
      },
      rotate : {
        '8' : '7deg'
      },
      backgroundImage: {
        'pokemon-pattern': "url('assets/images/background-pokemon.png')",
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
      }
    },
  },
  safelist : [

    'bg-normal',
    'bg-normal/30',
    'hover:bg-normal/30',

    'bg-fire',
    'bg-fire/30',
    'hover:bg-fire/30',

    'bg-water',
    'bg-water/30',
    'hover:bg-water/30',

    'bg-electric',
    'bg-electric/30',
    'hover:bg-electric/30',

    'bg-grass',
    'bg-grass/30',
    'hover:bg-grass/30',

    'bg-ice',
    'bg-ice/30',
    'hover:bg-ice/30',

    'bg-fighting',
    'bg-fighting/30',
    'hover:bg-fighting/30',

    'bg-poison',
    'bg-poison/30',
    'hover:bg-poison/30',

    'bg-ground',
    'bg-ground/30',
    'hover:bg-ground/30',

    'bg-flying',
    'bg-flying/30',
    'hover:bg-flying/30',

    'bg-psychic',
    'bg-psychic/30',
    'hover:bg-psychic/30',

    'bg-bug',
    'bg-bug/30',
    'hover:bg-bug/30',

    'bg-rock',
    'bg-rock/30',
    'hover:bg-rock/30',

    'bg-ghost',
    'bg-ghost/30',
    'hover:bg-ghost/30',

    'bg-dragon',
    'bg-dragon/30',
    'hover:bg-dragon/30',

    'bg-dark',
    'bg-dark/30',
    'hover:bg-dark/30',

    'bg-steel',
    'bg-steel/30',
    'hover:bg-steel/30',

    'bg-fairy',
    'bg-fairy/30',
    'hover:bg-fairy/30',

    'text-normal',
    'text-fire',
    'text-water',
    'text-electric',
    'text-grass',
    'text-ice',
    'text-fighting',
    'text-poison',
    'text-ground',
    'text-flying',
    'text-psychic',
    'text-bug',
    'text-rock',
    'text-ghost',
    'text-dragon',
    'text-dark',
    'text-steel',
    'text-fairy',

    'border-normal',
    'ring-normal',

    'border-fire',
    'ring-fire',

    'border-water',
    'ring-water',

    'border-electric',
    'ring-electric',

    'border-grass',
    'ring-grass',

    'border-ice',
    'ring-ice',

    'border-fighting',
    'ring-fighting',

    'border-poison',
    'ring-poison',

    'border-ground',
    'ring-ground',

    'border-flying',
    'ring-flying',

    'border-psychic',
    'ring-psychic',

    'border-bug',
    'ring-bug',

    'border-rock',
    'ring-rock',

    'border-ghost',
    'ring-ghost',

    'border-dragon',
    'ring-dragon',

    'border-dark',
    'ring-dark',

    'border-steel',
    'ring-steel',

    'border-fairy',
    'ring-fairy',
  ],
  plugins: [],
}

