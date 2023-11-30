import { useState } from "react";
import AppCSS from "./App.module.css";
import PlayerColumn from "./components/PlayerColumn.jsx";
import PokemonSelection from "./components/PokemonSelection.jsx";

export const Context = React.createContext()

export default function App() {
  const [playerOneTeam, setPlayerOneTeam] = useState([]);
  const [playerTwoTeam, setPlayerTwoTeam] = useState([]);
  return (
    <Context.Provider value={[playerOneTeam, setPlayerOneTeam, playerTwoTeam, setPlayerTwoTeam]}>
      <div className={AppCSS.wrapper}>
        <PlayerColumn playerName="Player 1" playerColor="purple" />
        <PokemonSelection />
        <PlayerColumn playerName="Player 2" playerColor="orange" />
      </div>
    </Context.Provider>
);
}
