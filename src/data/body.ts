export enum Muscle {
  CHEST = "Chest",
  LATS = "Lats",
  TRAPS = "Traps",
  NECK = "Neck",
  LOWER_BACK = "Lower Back",
  FRONT_DELTOID = "Front Deltoid",
  SIDE_DELTOID = "Side Deltoid",
  BACK_DELTOID = "Back Deltoid",
  BICEPS = "Biceps",
  TRICEPS = "Triceps",
  FOREARMS = "Forearms",
  ABDOMINALS = "Abdominals",
  OBLIQUES = "Obliques",
  GLUTES = "Glutes",
  QUADRICEPS = "Quadriceps",
  HAMSTRINGS = "Hamstrings",
  ABDUCTORS = "Abductors",
  ADDUCTORS = "Adductors",
  CALVES = "Calves",
  NONE = "None",
}

export const CORE_GROUP = [
  Muscle.ABDOMINALS,
  Muscle.OBLIQUES,
  Muscle.LOWER_BACK,
];

export const UPPER_BODY = [
  Muscle.CHEST,
  Muscle.LATS,
  Muscle.TRAPS,
  Muscle.NECK,
  Muscle.FRONT_DELTOID,
  Muscle.SIDE_DELTOID,
  Muscle.BACK_DELTOID,
  Muscle.BICEPS,
  Muscle.TRICEPS,
  Muscle.FOREARMS,
];

export const LOWER_BODY = [
  Muscle.GLUTES,
  Muscle.QUADRICEPS,
  Muscle.HAMSTRINGS,
  Muscle.CALVES,
  Muscle.ABDUCTORS
];

export const ALL_MUSCLE = [
  Muscle.ABDOMINALS,
  Muscle.OBLIQUES,
  Muscle.LOWER_BACK,
  Muscle.GLUTES,
  Muscle.QUADRICEPS,
  Muscle.HAMSTRINGS,
  Muscle.CALVES,
  Muscle.ABDUCTORS,
  Muscle.ADDUCTORS,
  Muscle.NECK,
  Muscle.CHEST,
  Muscle.LATS,
  Muscle.TRAPS,
  Muscle.FRONT_DELTOID,
  Muscle.SIDE_DELTOID,
  Muscle.BACK_DELTOID,
  Muscle.BICEPS,
  Muscle.TRICEPS,
  Muscle.FOREARMS,
];
