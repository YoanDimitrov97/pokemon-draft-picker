import PokemonBoxCSS from "./PokemonBox.module.css";

export default function PokemonBox(props) {
  return (
    <div
      className={`${PokemonBoxCSS.pkmn_box} ${
        PokemonBoxCSS[props.playerColor]
      }`}
    >
      {props.pkmn_name !== "POKEMON" && (
        <img
          className={PokemonBoxCSS.pkmn_image}
          src={`https://play.pokemonshowdown.com/sprites/gen5/${props.pkmn_name.toLowerCase()}.png`}
        />
      )}

      <div className={PokemonBoxCSS.pkmn_name}>
        <p>{props.pkmn_name}</p>
      </div>
    </div>
  );
}
