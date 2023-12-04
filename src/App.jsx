import React, { useState } from "react";
import AppCSS from "./App.module.css";
import PlayerColumn from "./components/PlayerColumn.jsx";
import PokemonSelection from "./components/PokemonSelection.jsx";

export const Context = React.createContext();

export default function App() {
  const [playerOneTeam, setPlayerOneTeam] = useState([]);
  const [playerTwoTeam, setPlayerTwoTeam] = useState([]);
  const [alreadySelectedPkmn, setAlreadySelectedPkmn] = useState([]);
  const [isPlayerOne, setIsPlayerOne] = useState(true);
    console.log(playerOneTeam, playerTwoTeam, isPlayerOne);
  return (
    <Context.Provider
      value={[
        playerOneTeam,
        setPlayerOneTeam,
        playerTwoTeam,
        setPlayerTwoTeam,
        alreadySelectedPkmn,
        setAlreadySelectedPkmn,
        isPlayerOne,
        setIsPlayerOne,
      ]}
    >
      <div className={AppCSS.wrapper}>
        <PlayerColumn
          playerName="Player 1"
          playerColor="purple"
          pkmn={playerOneTeam}
        />
        <PokemonSelection />
        <PlayerColumn
          playerName="Player 2"
          playerColor="orange"
          pkmn={playerTwoTeam}
        />
      </div>
    </Context.Provider>
  );
}
