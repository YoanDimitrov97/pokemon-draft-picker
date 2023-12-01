import PokemonSelectionBoxCSS from "./PokemonSelectionBox.module.css";
import MaskPattern from '../../assets/Pattern.png';
import { Context } from "../../App";
import { useContext } from "react";


export default function PokemonSelectionBox(props) {  
  let fixPkmnName = props.pkmn_name.replace(" ", "").toLowerCase()

  if(!['galar', 'hisui', 'alola', 'rotom', 'therian'].some(str => fixPkmnName.includes(str)))
     fixPkmnName = props.pkmn_name.replace("-", "").replace("’", "").replace(".", "").replace(" ", "").toLowerCase()

  const [
    playerOneTeam,
    setPlayerOneTeam,
    playerTwoTeam,
    setPlayerTwoTeam,
    isPlayerOne,
    setIsPlayerOne,
  ] = useContext(Context);

  const handlePokemonChoice = () => {
   
    if(isPlayerOne) {
      if(playerOneTeam.length <= 12) 
        setPlayerOneTeam((prev) => [...prev, props.pkmn_name])
    } 
    else {
      if(playerTwoTeam.length <= 12) 
        setPlayerTwoTeam((prev) => [...prev, props.pkmn_name])
    }
    setIsPlayerOne(!isPlayerOne)
     console.log(playerOneTeam, playerTwoTeam, isPlayerOne);
  }

  return (
    <div
      className={PokemonSelectionBoxCSS.pkmn_box}
      style={{ backgroundColor: props.bgn_color }}
      onClick={handlePokemonChoice}
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
