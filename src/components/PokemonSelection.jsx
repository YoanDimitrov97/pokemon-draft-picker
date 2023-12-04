import PokemonSelectionBox from "./PokemonSelection/PokemonSelectionBox";
import PokemonSelectionCSS from "./PokemonSelection.module.css";
import { getBGNColor,getRandomBGNColor } from "../utils/getRandomBGNColor.js";

import { useState, useEffect } from "react";


export default function PokemonSelection() {
  const [randomPokemon, setRandomPokemon] = useState([])
  const getPokemonData = async() => {
    const res = await fetch('https://api.steinhq.com/v1/storages/655a037dc5ad5604ce2c1251/Draft League');
    const data = await res.json();
    setRandomPokemon(data);
    //console.log(randomPokemon);
  }

  useEffect(() => {
    getPokemonData();
    return () => {
    }
  }, [])
  // console.log(randomPokemon)
  return (
    <div className={PokemonSelectionCSS.wrapper}>
      {randomPokemon.map((pokemon, index) => (
        <PokemonSelectionBox key={index} bgn_color={getBGNColor(pokemon.bgn_color)} pkmn_name={pokemon.name}/>
      ))}
    </div>
  );
}
