import Styles from "./Workout.module.css";
import { RxValueNone } from "react-icons/rx";
import { muscleGroups } from "../../muscle/body";

import upperBackDefaultIcon from "./../../assets/body-icons/upper-back/upper-body-back-default.svg";
import upperBackLatsIcon from "./../../assets/body-icons/upper-back/upper-body-back-lats.svg";
import upperBackTrapsIcon from "./../../assets/body-icons/upper-back/upper-body-back-traps.svg";
import upperBackTricepsIcon from "./../../assets/body-icons/upper-back/upper-body-back-triceps.svg";

import upperFrontDefaultIcon from "./../../assets/body-icons/upper/upper-body-front-default.svg";
import upperFrontBicepIcon from "./../../assets/body-icons/upper/upper-body-front-bicep.svg";
import upperFrontChestIcon from "./../../assets/body-icons/upper/upper-body-front-chest.svg";
import upperFrontCoreIcon from "./../../assets/body-icons/upper/upper-body-front-core.svg";
import upperFrontForearmsIcon from "./../../assets/body-icons/upper/upper-body-front-forearms.svg";
import upperFrontNeckIcon from "./../../assets/body-icons/upper/upper-body-front-neck.svg";
import upperFrontShoulderIcon from "./../../assets/body-icons/upper/upper-body-front-shoulder.svg";

import lowerFrontDefaultIcon from "./../../assets/body-icons/lower/lower-body-default.svg";
import lowerFrontAdductorsIcon from "./../../assets/body-icons/lower/lower-body-adductors.svg";
import lowerFrontThighsIcon from "./../../assets/body-icons/lower/lower-body-thighs.svg";

import lowerBackDefaultIcon from "./../../assets/body-icons/lower-back/lower-body-back-default.svg";
import lowerBackCalvesIcon from "./../../assets/body-icons/lower-back/lower-body-back-calves.svg";
import lowerBackGlutesIcon from "./../../assets/body-icons/lower-back/lower-body-back-glutes.svg";
import lowerBackHamstringsIcon from "./../../assets/body-icons/lower-back/lower-body-back-hamstrings.svg";
import { useState } from "react";

function Workout({ name, group }: { name: string; group: muscleGroups }) {
  const [open, setOpen] = useState(false);
  const [newGroup, setGroup] = useState(group);

  const handleButton = () => {
    setOpen((o) => !o);
  };

  const handleChange = (group: muscleGroups) => {
    setGroup(group);
  };

  const chooseIcon = (group: muscleGroups) => {
    switch (group) {
      case muscleGroups.CHEST:
        return <img src={upperFrontChestIcon} className={Styles.bodyIcons} />;
      case muscleGroups.LEG:
        return <img src={lowerFrontDefaultIcon} className={Styles.bodyIcons} />;
      case muscleGroups.BACK:
        return <img src={upperBackDefaultIcon} className={Styles.bodyIcons} />;
      case muscleGroups.ABS:
        return <img src={upperFrontCoreIcon} className={Styles.bodyIcons} />;
      case muscleGroups.CAVLE:
        return <img src={lowerBackCalvesIcon} className={Styles.bodyIcons} />;
      case muscleGroups.GLUTE:
        return <img src={lowerBackGlutesIcon} className={Styles.bodyIcons} />;
      case muscleGroups.BICEP:
        return <img src={upperFrontBicepIcon} className={Styles.bodyIcons} />;
      case muscleGroups.TRICEP:
        return <img src={upperBackTricepsIcon} className={Styles.bodyIcons} />;
      case muscleGroups.SHOULDER:
        return (
          <img src={upperFrontShoulderIcon} className={Styles.bodyIcons} />
        );
      case muscleGroups.TRAP:
        return <img src={upperBackTrapsIcon} className={Styles.bodyIcons} />;
      case muscleGroups.LATS:
        return <img src={upperBackLatsIcon} className={Styles.bodyIcons} />;
      case muscleGroups.FOREARM:
        return (
          <img src={upperFrontForearmsIcon} className={Styles.bodyIcons} />
        );
      case muscleGroups.NECK:
        return <img src={upperFrontNeckIcon} className={Styles.bodyIcons} />;
      case muscleGroups.ADDUCTOR:
        return (
          <img src={lowerFrontAdductorsIcon} className={Styles.bodyIcons} />
        );
      case muscleGroups.THIGH:
        return <img src={lowerFrontThighsIcon} className={Styles.bodyIcons} />;
      case muscleGroups.HAMSTRING:
        return (
          <img src={lowerBackHamstringsIcon} className={Styles.bodyIcons} />
        );
      case muscleGroups.NONE:
      default:
        return <RxValueNone size="1.5rem" />;
    }
  };

  return (
    <>
      <span id={Styles.name}>{name}</span>
      <button id={Styles.chooseButton} onClick={handleButton}>
        {chooseIcon(newGroup)}
        {open ? (
          <div className={Styles.dropdown}>
            <img
              src={upperFrontChestIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.CHEST)}
            />
            <img
              src={lowerFrontDefaultIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.NONE)}
            />
            <img
              src={upperBackDefaultIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.NONE)}
            />
            <img
              src={upperFrontCoreIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.ABS)}
            />
            <img
              src={lowerBackCalvesIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.CAVLE)}
            />
            <img
              src={lowerBackGlutesIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.GLUTE)}
            />
            <img
              src={upperFrontBicepIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.BICEP)}
            />
            <img
              src={upperBackTricepsIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.TRICEP)}
            />
            <img
              src={upperFrontShoulderIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.SHOULDER)}
            />
            <img
              src={upperBackTrapsIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.TRAP)}
            />
            <img
              src={upperBackLatsIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.LATS)}
            />
            <img
              src={upperFrontForearmsIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.FOREARM)}
            />
            <img
              src={upperFrontNeckIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.NECK)}
            />
            <img
              src={lowerFrontAdductorsIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.ADDUCTOR)}
            />
            <img
              src={lowerFrontThighsIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.THIGH)}
            />
            <img
              src={lowerBackHamstringsIcon}
              className={Styles.bodyIcons}
              onClick={() => handleChange(muscleGroups.HAMSTRING)}
            />
          </div>
        ) : null}
      </button>
    </>
  );
}

export default Workout;
