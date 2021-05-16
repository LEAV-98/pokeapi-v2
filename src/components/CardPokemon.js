import React from "react";
import "../themes/pokemonTypes.css";
import "../themes/styles.css";
export const CardPokemon = ({ pokemon, pokemonapi }) => {
  const returnType = (type) => {
    let parrafoType = "";
    switch (type.type.name) {
      case "bug":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn bicho white">
            {type.type.name}
          </p>
        );
        break;
      case "steel":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn acero white">
            {type.type.name}
          </p>
        );

        break;
      case "grass":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn planta ">
            {type.type.name}
          </p>
        );

        break;
      case "poison":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn veneno white">
            {type.type.name}
          </p>
        );

        break;
      case "normal":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn normal white">
            {type.type.name}
          </p>
        );

        break;
      case "psychic":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn psiquico white ">
            {type.type.name}
          </p>
        );

        break;
      case "fire":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn fuego white">
            {type.type.name}
          </p>
        );

        break;
      case "water":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn agua white">
            {type.type.name}
          </p>
        );

        break;
      case "ground":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn tierra white">
            {type.type.name}
          </p>
        );

        break;
      case "rock":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn roca white">
            {type.type.name}
          </p>
        );

        break;
      case "dark":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn siniestro white">
            {type.type.name}
          </p>
        );

        break;
      case "fairy":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn hada white">
            {type.type.name}
          </p>
        );

        break;
      case "electric":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn electrico  ">
            {type.type.name}
          </p>
        );

        break;
      case "fighting":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn lucha  white">
            {type.type.name}
          </p>
        );

        break;
      case "dragon":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn dragon white">
            {type.type.name}
          </p>
        );

        break;
      case "flying":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn volador white">
            {type.type.name}
          </p>
        );
        break;
      case "ghost":
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn btn-dark white">
            {type.type.name}
          </p>
        );
        break;
      default:
        parrafoType = (
          <p key={type.slot} className="text-capitalize btn btn-danger white">
            {type.type.name}
          </p>
        );
    }
    return parrafoType;
  };

  return (
    <div className="col-sm-10 col-md-8 col-lg-6">
      <div className="card d-flex align -items-center card-pokemon">
        <img
          className="card-img-top img-fluid  "
          src={pokemon.sprites.front_default}
          alt="auto"
          onClick={() => {
            pokemonapi();
          }}
        ></img>
        <div className="card-body">
          <h1 className="text-center">{`Numero : ${pokemon.id}`}</h1>

          <h2 className="card-title text-capitalize text-center">
            {pokemon.name}
          </h2>
          <div className="d-flex w-100 justify-content-around container-types ">
            {pokemon.types.map((type) => returnType(type))}
          </div>
          <div className="container pl-5 container-stats">
            {pokemon.stats.map((stat, index) => (
              <p className="text-capitalize card-text" key={index}>
                {stat.stat.name} : {stat.base_stat}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
