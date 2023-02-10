export type PokemonDetail = {
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  height: number;
  weight: number;
};
