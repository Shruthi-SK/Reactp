import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetails = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonImage, setPokemonImage] = useState("");

  const getPokemons = async () => {
    const res = await axios.get(url);
    setPokemon(res.data);
    setPokemonImage(res.data.sprites.other.dream_world.front_default);
  };

  useEffect(() => {
    getPokemons();
  }, [url]);

  return (
    <div className="border basis-1/6 rounded-md hover:shadow-md bg-white">
      <div className="flex flex-col items-center justify-between gap-6 p-6">
        <h1 className="capitalize text-xl font-bold tracking-wide">
          {pokemon.name}
        </h1>
        <img className="max-w-full w-full h-56" src={pokemonImage} alt="" />
      </div>
    </div>
  );
};

export default PokemonDetails;

