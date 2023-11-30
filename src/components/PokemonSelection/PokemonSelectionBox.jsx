import PokemonSelectionBoxCSS from "./PokemonSelectionBox.module.css";
import MaskPattern from '../../assets/Pattern.png';


export default function PokemonSelectionBox(props) {  
  let fixPkmnName = props.pkmn_name.replace(" ", "").toLowerCase()

  if(!['galar', 'hisui', 'alola', 'rotom', 'therian'].some(str => fixPkmnName.includes(str)))
     fixPkmnName = props.pkmn_name.replace("-", "").replace("’", "").replace(".", "").replace(" ", "").toLowerCase()

  return (
    <div
      className={PokemonSelectionBoxCSS.pkmn_box}
      style={{ backgroundColor: props.bgn_color }}
    >
      <div className={PokemonSelectionBoxCSS.opacity_mask}></div>
      <img className={PokemonSelectionBoxCSS.bgn_mask} src={MaskPattern} />
      <img className={PokemonSelectionBoxCSS.pkmn_image} src={`https://play.pokemonshowdown.com/sprites/gen5/${fixPkmnName}.png`} />
      <div className={PokemonSelectionBoxCSS.pkmn_name}>
        <p>{props.pkmn_name}</p>
      </div>
    </div>
  );
}
