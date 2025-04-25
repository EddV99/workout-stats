import upperBackDefaultIcon from "../assets/body-icons/upper-back/upper-body-back-default.svg";
import upperBackLatsIcon from "../assets/body-icons/upper-back/upper-body-back-lats.svg";
import upperBackTrapsIcon from "../assets/body-icons/upper-back/upper-body-back-traps.svg";
import upperBackTricepsIcon from "../assets/body-icons/upper-back/upper-body-back-triceps.svg";

import upperFrontDefaultIcon from "../assets/body-icons/upper/upper-body-front-default.svg";
import upperFrontBicepIcon from "../assets/body-icons/upper/upper-body-front-bicep.svg";
import upperFrontChestIcon from "../assets/body-icons/upper/upper-body-front-chest.svg";
import upperFrontCoreIcon from "../assets/body-icons/upper/upper-body-front-core.svg";
import upperFrontForearmsIcon from "../assets/body-icons/upper/upper-body-front-forearms.svg";
import upperFrontNeckIcon from "../assets/body-icons/upper/upper-body-front-neck.svg";
import upperFrontShoulderIcon from "../assets/body-icons/upper/upper-body-front-shoulder.svg";

import lowerFrontDefaultIcon from "../assets/body-icons/lower/lower-body-default.svg";
import lowerFrontAdductorsIcon from "../assets/body-icons/lower/lower-body-adductors.svg";
import lowerFrontThighsIcon from "../assets/body-icons/lower/lower-body-thighs.svg";

import lowerBackDefaultIcon from "../assets/body-icons/lower-back/lower-body-back-default.svg";
import lowerBackCalveIcon from "../assets/body-icons/lower-back/lower-body-back-calves.svg";
import lowerBackGlutesIcon from "../assets/body-icons/lower-back/lower-body-back-glutes.svg";
import lowerBackHamstringsIcon from "../assets/body-icons/lower-back/lower-body-back-hamstrings.svg";
import { Muscle } from "./body";

const icons = {
  upperBackDefaultIcon,
  upperBackLatsIcon,
  upperBackTrapsIcon,
  upperBackTricepsIcon,

  upperFrontDefaultIcon,
  upperFrontBicepIcon,
  upperFrontChestIcon,
  upperFrontCoreIcon,
  upperFrontForearmsIcon,
  upperFrontNeckIcon,
  upperFrontShoulderIcon,

  lowerFrontDefaultIcon,
  lowerFrontAdductorsIcon,
  lowerFrontThighsIcon,

  lowerBackDefaultIcon,
  lowerBackCalveIcon,
  lowerBackGlutesIcon,
  lowerBackHamstringsIcon,
};

export default icons;

export const muscleToIcon = (muscle: Muscle) => {
  switch (muscle) {
    case Muscle.CHEST:
      return upperFrontChestIcon;
    case Muscle.LEG:
      return lowerFrontDefaultIcon;
    case Muscle.BACK:
      return upperBackDefaultIcon;
    case Muscle.ABS:
      return upperFrontCoreIcon;
    case Muscle.CALVE:
      return lowerBackCalveIcon;
    case Muscle.GLUTE:
      return lowerBackGlutesIcon;
    case Muscle.BICEP:
      return upperFrontBicepIcon;
    case Muscle.TRICEP:
      return upperBackTricepsIcon;
    case Muscle.SHOULDER:
      return upperFrontShoulderIcon;
    case Muscle.TRAP:
      return upperBackTrapsIcon;
    case Muscle.LATS:
      return upperBackLatsIcon;
    case Muscle.FOREARM:
      return upperFrontForearmsIcon;
    case Muscle.NECK:
      return upperFrontNeckIcon;
    case Muscle.ADDUCTOR:
      return lowerFrontAdductorsIcon;
    case Muscle.THIGH:
      return lowerFrontThighsIcon;
    case Muscle.HAMSTRING:
      return lowerBackHamstringsIcon;
    case Muscle.UPPER_FRONT:
      return upperFrontDefaultIcon;
    case Muscle.UPPER_BACK:
      return upperBackDefaultIcon;
    case Muscle.LOWER_FRONT:
      return lowerFrontDefaultIcon;
    case Muscle.LOWER_BACK:
      return lowerBackDefaultIcon;
  }
};
