import { PokemonDetail } from "../models/PokemonDetail";
import { PokemonList } from "../models/PokemonList";

export const getAllPokemon = (url: string) => {
  return new Promise<PokemonList>((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

export const getPokemon = (url: string) => {
  return new Promise<PokemonDetail>((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};
