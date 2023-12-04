import PlayerAvatar from "./PlayerColumn/PlayerAvatar";
import PokemonBox from "./PlayerColumn/PokemonBox";
import { Context } from "../App";
import { useContext, useEffect, useState } from "react";

import PlayerColumnCSS from "./PlayerColumn.module.css";

export default function PlayerColumn(props) {
  const [
    isPlayerOne,
    playerOneTeam,
    setPlayerOneTeam,
    playerTwoTeam,
    setPlayerTwoTeam,
  ] = useContext(Context);

const defaultBoxes = Array.from({ length: 12 - props.pkmn?.length });
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
        {props.pkmn.map((pkmn, index) => (
          <PokemonBox
            key={index}
            pkmn_name={pkmn}
            playerColor={props.playerColor}
          />
        ))}
        {/* Map over the array and render PokemonBox components */}
        {defaultBoxes.map((_, index) => (
          <PokemonBox
            key={index}
            pkmn_name={"POKEMON"}
            playerColor={props.playerColor}
          />
        ))}
      </div>
    </div>
  );
}
