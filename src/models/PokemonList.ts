import { Pokemon } from "./Pokemon";

export type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: Array<Pokemon>;
};
