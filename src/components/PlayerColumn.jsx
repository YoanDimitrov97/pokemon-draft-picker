import PlayerAvatar from "./PlayerColumn/PlayerAvatar";
import PokemonBox from "./PlayerColumn/PokemonBox";
import { Context } from "../App";
import { useContext } from "react";

import PlayerColumnCSS from "./PlayerColumn.module.css";


export default function PlayerColumn(props) {

  const [
    isPlayerOne,
    playerOneTeam,
    setPlayerOneTeam,
    playerTwoTeam,
    setPlayerTwoTeam,
  ] = useContext(Context);
const defaultBoxes = Array.from({ length: 12 });
  return (
    <div className={PlayerColumnCSS.player_wrapper}>
      <PlayerAvatar
        playerName={props.playerName}
        playerColor={props.playerColor}
      />
      <div
        className={`${PlayerColumnCSS.pkmn_wrapper} ${
          PlayerColumnCSS[props.playerColor]
        }`}
      >
        {/* Map over the array and render PokemonBox components */}
        {defaultBoxes.map((_, index) => (
          <PokemonBox
            key={index}
            pkmn_name={
              isPlayerOne ? playerOneTeam[index] : playerTwoTeam[index]
            }
          />
        ))}
      </div>
    </div>
  );
}
