import PlayerAvatarCSS from "./PlayerAvatar.module.css";

export default function PlayerAvatar(props) {
  return (
    <div
      className={`${PlayerAvatarCSS.avatar_box} ${
        PlayerAvatarCSS[props.playerColor]
      }`}
    >
      <div className={PlayerAvatarCSS.name_wrapper}>
        <p>{props.playerName}</p>
      </div>
    </div>
  );
}
