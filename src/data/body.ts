export enum Muscle {
  CHEST,
  LATS,
  TRAPS,
  RHOMBOID,
  LOWER_BACK,
  FRONT_DELTOID,
  SIDE_DELTOID,
  BACK_DELTOID,
  BICEPS,
  TRICEPS,
  FOREARMS,
  ABDOMINALS,
  OBLIQUES,
  GLUTES,
  QUADRICEPS,
  HAMSTRINGS,
  CALVES,
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
  Muscle.RHOMBOID,
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
];
