import React from "react";

export const ButtonRandom = ({ pokemonapi }) => {
  return (
    <>
      <a href="#pokemon">
        <button
          className="w-100 my-2 btn btn-danger"
          onClick={() => {
            pokemonapi();
          }}
        >
          Random
        </button>
      </a>
    </>
  );
};
