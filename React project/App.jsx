import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonDetails from "./PokemonDetails";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  const getPokemons = async () => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
    );

    setPokemon(res.data.results);
  };

  console.log(pokemon);

  useEffect(() => {
    getPokemons();
  }, [offset]);

  return (
    <div className="container mx-auto bg-gray-100">
      <div>
        <h1 className="text-center text-3xl py-6">Pokemon</h1>
      </div>
      <div className="p-6 flex justify-between items-center gap-12">
        <button
          onClick={() => setOffset(offset === 0 ? 0 : offset - 20)}
          className="w-32 h-12 bg-blue-300 p-1 rounded-md"
        >
          Previous
        </button>
        <input
          type="text"
          name=""
          id=""
          className="grow h-12 p-6 text-xl"
          placeholder="Search for a pokemon"
        />
        <button
          onClick={() => setOffset(offset + 20)}
          className="w-32 h-12 bg-blue-300 p-1 rounded-md"
        >
          Next
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {pokemon.map((p, index) => (
          <PokemonDetails key={index} url={p.url} />
        ))}
      </div>
    </div>
   
  );
};

export default App;