import React from "react";
import { ButtonRandom } from "./ButtonRandom";
import { CardPokemon } from "./CardPokemon";

export const Pokemon = ({ pokemonapi, pokemon }) => {
  return (
    <>
      <CardPokemon pokemon={pokemon} pokemonapi={pokemonapi} />
      <ButtonRandom pokemonapi={pokemonapi} />
    </>
  );
};
