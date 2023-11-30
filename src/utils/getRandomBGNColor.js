export const getRandomBGNColor = () => {
  //blue, pink, orange, limegreen, yellow
  const allBgnColors = ["#29A5E3", "#CE5FD3", "#F16C38", "#ACED5B", "#FECC51"];
  return allBgnColors[Math.floor(Math.random() * 5)];
};

export const getBGNColor = (myColor) => {
  //blue, purple, orange, green, yellow
  const allBgnColors = {blue:"#29A5E3", purple:"#CE5FD3", orange:"#F16C38", green:"#ACED5B", yellow:"#FECC51"};
  return allBgnColors[myColor];
};