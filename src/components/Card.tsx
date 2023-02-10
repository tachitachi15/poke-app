import React from "react";
import { PokemonDetail } from "../models/PokemonDetail";
import "./Card.css";
type Props = {
  pokemon: PokemonDetail;
};
const Card = (props: Props) => {
  const { pokemon } = props;
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default}></img>
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <div>
              <span>{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ: {pokemon.weight}</p>
          <p className="title">高さ: {pokemon.height}</p>
          <p className="title">
            アビリティ: {pokemon.abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
