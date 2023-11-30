import PlayerAvatar from "./PlayerColumn/PlayerAvatar";
import PokemonBox from "./PlayerColumn/PokemonBox";

import PlayerColumnCSS from "./PlayerColumn.module.css";

export default function PlayerColumn(props) {
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
        <PokemonBox playerColor={props.playerColor} />
        <PokemonBox playerColor={props.playerColor} />
        <PokemonBox playerColor={props.playerColor} />
        <PokemonBox playerColor={props.playerColor} />
        <PokemonBox playerColor={props.playerColor} />
        <PokemonBox playerColor={props.playerColor} />
        <PokemonBox playerColor={props.playerColor} />
        <PokemonBox playerColor={props.playerColor} />
        <PokemonBox playerColor={props.playerColor} />
        <PokemonBox playerColor={props.playerColor} />
        <PokemonBox playerColor={props.playerColor} />
        <PokemonBox playerColor={props.playerColor} />
      </div>
    </div>
  );
}
