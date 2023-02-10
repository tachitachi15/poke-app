import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { Pokemon } from "./models/Pokemon";
import { PokemonDetail } from "./models/PokemonDetail";
import { PokemonList } from "./models/PokemonList";
import { getAllPokemon, getPokemon } from "./utlis/pokemon";

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";
  const [pokemonDetailList, setPokemonDetailList] = useState<
    Array<PokemonDetail>
  >([]);
  const [nextUrl, setNextUrl] = useState<string>();
  const [prevUrl, setPrevUrl] = useState<string>();

  const fetchPokemon = async (url: string) => {
    const res = await getAllPokemon(url);
    const details = await loadPokemon(res.results);
    console.log(res);
    setPokemonDetailList(details);
    setNextUrl(res.next);
    setPrevUrl(res.previous);
  };

  useEffect(() => {
    fetchPokemon(initialUrl);
  }, []);

  const loadPokemon = async (pokemons: Array<Pokemon>) => {
    let pokemonDetailList = await Promise.all(
      pokemons.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    return pokemonDetailList;
  };

  const handlePrevPage = () => {
    if (prevUrl) fetchPokemon(prevUrl);
  };
  const handleNextPage = () => {
    if (nextUrl) fetchPokemon(nextUrl);
  };
  return (
    <>
      <Navbar />
      <div className="pokemonCardContainer">
        {pokemonDetailList.map((pokemon, i) => {
          return <Card key={i} pokemon={pokemon} />;
        })}
      </div>
      <div className="btn">
        <button onClick={handlePrevPage}>前へ</button>
        <button onClick={handleNextPage}>次へ</button>
      </div>
    </>
  );
}

export default App;
