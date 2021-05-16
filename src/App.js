import React, { useEffect, useState } from "react";
import { Pokemon } from "./components/Pokemon";
import { Spinner } from "./components/Spinner";
import { pokeApi } from "./helpers/pokeApi";
import "./themes/styles.css";
const stats = [
  {
    base_stat: 0,
    stat: {
      name: "hp",
    },
  },
  {
    base_stat: 0,
    stat: {
      name: "attack",
    },
  },
  {
    base_stat: 0,
    stat: {
      name: "defense",
    },
  },
  {
    base_stat: 0,
    stat: {
      name: "special-attack",
    },
  },
  {
    base_stat: 0,
    stat: {
      name: "special-defense",
    },
  },
  {
    base_stat: 0,
    stat: {
      name: "speed",
    },
  },
];
const initialPokemon = {
  id: "",
  name: "",
  stats,
  types: [],
  sprites: {
    front_default: "",
  },
};
export const App = () => {
  const [pokemon, setpokemon] = useState(initialPokemon);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    pokemonapi();
  }, []);
  const pokemonapi = () => {
    setLoading(false);
    pokeApi()
      .then((pokemonOBJ) => {
        setpokemon(pokemonOBJ);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container py-2 " id="pokemon">
      <div className="row d-flex justify-content-center flex-column align-items-center container-app">
        {loading ? (
          <Pokemon pokemon={pokemon} pokemonapi={pokemonapi} />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};
