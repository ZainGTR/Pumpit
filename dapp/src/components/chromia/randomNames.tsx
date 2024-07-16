const funnyAnimalNames = [
  ["SneakyLlama", "akyLl"],
  ["CheekyMonkey", "Monkey"],
  ["LaughingPenguin", "Penguin"],
  ["CrazyKangaroo", "Kangaroo"],
  ["GigglingHedgehog", "Hedgehog"],
  ["WackyWalrus", "Walrus"],
  ["DancingDolphin", "Dolphin"],
  ["BumblingBee", "Bee"],
  ["HoppingBare", "Bare"],
  ["SingingSeagull", "Seagull"],
];

export function getRandomUserName() {
  const randomIndex = Math.floor(Math.random() * funnyAnimalNames.length);
  return funnyAnimalNames[randomIndex];
}
