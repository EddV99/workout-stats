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
import Hint from "../Hint/Hint";
import EditableText from "../EditableText/EditableText";
import { Stats } from "../Week/Week";

function Icons(handleChange: (group: muscleGroups) => void) {
  return (
    <div className={Styles.dropdown}>
      <Hint hint={muscleGroups.UPPER_FRONT}>
        <img
          src={upperFrontDefaultIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.UPPER_FRONT)}
        />
      </Hint>
      <Hint hint={muscleGroups.UPPER_BACK}>
        <img
          src={upperBackDefaultIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.UPPER_BACK)}
        />
      </Hint>
      <Hint hint={muscleGroups.LOWER_FRONT}>
        <img
          src={lowerFrontDefaultIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.LOWER_FRONT)}
        />
      </Hint>
      <Hint hint={muscleGroups.LOWER_BACK}>
        <img
          src={lowerBackDefaultIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.LOWER_BACK)}
        />
      </Hint>
      <Hint hint={muscleGroups.CHEST}>
        <img
          src={upperFrontChestIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.CHEST)}
        />
      </Hint>
      <Hint hint={muscleGroups.ABS}>
        <img
          src={upperFrontCoreIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.ABS)}
        />
      </Hint>
      <Hint hint={muscleGroups.CAVLE}>
        <img
          src={lowerBackCalvesIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.CAVLE)}
        />
      </Hint>
      <Hint hint={muscleGroups.GLUTE}>
        <img
          src={lowerBackGlutesIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.GLUTE)}
        />
      </Hint>
      <Hint hint={muscleGroups.BICEP}>
        <img
          src={upperFrontBicepIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.BICEP)}
        />
      </Hint>
      <Hint hint={muscleGroups.TRICEP}>
        <img
          src={upperBackTricepsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.TRICEP)}
        />
      </Hint>
      <Hint hint={muscleGroups.SHOULDER}>
        <img
          src={upperFrontShoulderIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.SHOULDER)}
        />
      </Hint>
      <Hint hint={muscleGroups.TRAP}>
        <img
          src={upperBackTrapsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.TRAP)}
        />
      </Hint>
      <Hint hint={muscleGroups.LATS}>
        <img
          src={upperBackLatsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.LATS)}
        />
      </Hint>
      <Hint hint={muscleGroups.FOREARM}>
        <img
          src={upperFrontForearmsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.FOREARM)}
        />
      </Hint>
      <Hint hint={muscleGroups.NECK}>
        <img
          src={upperFrontNeckIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.NECK)}
        />
      </Hint>
      <Hint hint={muscleGroups.ADDUCTOR}>
        <img
          src={lowerFrontAdductorsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.ADDUCTOR)}
        />
      </Hint>
      <Hint hint={muscleGroups.THIGH}>
        <img
          src={lowerFrontThighsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.THIGH)}
        />
      </Hint>
      <Hint hint={muscleGroups.HAMSTRING}>
        <img
          src={lowerBackHamstringsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(muscleGroups.HAMSTRING)}
        />
      </Hint>
    </div>
  );
}

interface Props {
  id: string;
  initialName: string;
  group: muscleGroups;
  stats: Stats;
  setStats: React.Dispatch<React.SetStateAction<Stats>>;
}

function Workout({ id, initialName, group, stats, setStats }: Props) {
  const [open, setOpen] = useState(false);
  const [newGroup, setGroup] = useState(group);
  const [name, setName] = useState(initialName);

  const handleButton = () => {
    setOpen((o) => !o);
  };

  const handleChange = (group: muscleGroups) => {
    setStats({
      ...stats,
      workouts: stats.workouts.map((w) => {
        const workout = { ...w };
        if (w.id === id) {
          workout.group = group;
        }
        return workout;
      }),
    });
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
      case muscleGroups.UPPER_FRONT:
        return <img src={upperFrontDefaultIcon} className={Styles.bodyIcons} />;
      case muscleGroups.UPPER_BACK:
        return <img src={upperBackDefaultIcon} className={Styles.bodyIcons} />;
      case muscleGroups.LOWER_FRONT:
        return <img src={lowerFrontDefaultIcon} className={Styles.bodyIcons} />;
      case muscleGroups.LOWER_BACK:
        return <img src={lowerBackDefaultIcon} className={Styles.bodyIcons} />;
      case muscleGroups.NONE:
      default:
        return <RxValueNone size="1.2rem" />;
    }
  };

  return (
    <div className={Styles.container}>
      <div id={Styles.name}>
        <EditableText
          text={name}
          onChange={(e) => {
            setStats({
              ...stats,
              workouts: stats.workouts.map((w) => {
                const workout = { ...w };
                if (w.id === id) {
                  workout.name = e.target.value;
                }
                return workout;
              }),
            });
            setName(e.target.value);
          }}
        />
      </div>
      <button id={Styles.chooseButton} onClick={handleButton}>
        {chooseIcon(newGroup)}
        {open ? Icons(handleChange) : null}
      </button>
    </div>
  );
}

export default Workout;
