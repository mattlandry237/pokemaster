import React from "react";

const PokeImage = ({ pokemon }) => {
  if (!pokemon) return <div>no pokemon</div>;
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img alt="pokemon" src={pokemon.sprites.front_default} />
      <img alt="pokemon" src={pokemon.sprites.back_default} />
    </div>
  );
};

export default PokeImage;
