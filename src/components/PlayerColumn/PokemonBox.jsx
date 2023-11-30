import PokemonBoxCSS from "./PokemonBox.module.css";

export default function PokemonBox(props) {
  return (
    <div
      className={`${PokemonBoxCSS.pkmn_box} ${
        PokemonBoxCSS[props.playerColor]
      }`}
    >
      <div className={PokemonBoxCSS.pkmn_name}>
        <p>POKEMON</p>
      </div>
    </div>
  );
}
