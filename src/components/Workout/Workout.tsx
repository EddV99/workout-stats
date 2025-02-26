import Styles from "./Workout.module.css";
import { RxValueNone } from "react-icons/rx";
import { Muscle } from "../../muscle/body";

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
import { InternalData } from "../Week/Week";

function Icons(handleChange: (group: Muscle) => void) {
  return (
    <div className={Styles.dropdown}>
      <Hint hint={Muscle.UPPER_FRONT}>
        <img
          src={upperFrontDefaultIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.UPPER_FRONT)}
        />
      </Hint>
      <Hint hint={Muscle.UPPER_BACK}>
        <img
          src={upperBackDefaultIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.UPPER_BACK)}
        />
      </Hint>
      <Hint hint={Muscle.LOWER_FRONT}>
        <img
          src={lowerFrontDefaultIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.LOWER_FRONT)}
        />
      </Hint>
      <Hint hint={Muscle.LOWER_BACK}>
        <img
          src={lowerBackDefaultIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.LOWER_BACK)}
        />
      </Hint>
      <Hint hint={Muscle.CHEST}>
        <img
          src={upperFrontChestIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.CHEST)}
        />
      </Hint>
      <Hint hint={Muscle.ABS}>
        <img
          src={upperFrontCoreIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.ABS)}
        />
      </Hint>
      <Hint hint={Muscle.CAVLE}>
        <img
          src={lowerBackCalvesIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.CAVLE)}
        />
      </Hint>
      <Hint hint={Muscle.GLUTE}>
        <img
          src={lowerBackGlutesIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.GLUTE)}
        />
      </Hint>
      <Hint hint={Muscle.BICEP}>
        <img
          src={upperFrontBicepIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.BICEP)}
        />
      </Hint>
      <Hint hint={Muscle.TRICEP}>
        <img
          src={upperBackTricepsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.TRICEP)}
        />
      </Hint>
      <Hint hint={Muscle.SHOULDER}>
        <img
          src={upperFrontShoulderIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.SHOULDER)}
        />
      </Hint>
      <Hint hint={Muscle.TRAP}>
        <img
          src={upperBackTrapsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.TRAP)}
        />
      </Hint>
      <Hint hint={Muscle.LATS}>
        <img
          src={upperBackLatsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.LATS)}
        />
      </Hint>
      <Hint hint={Muscle.FOREARM}>
        <img
          src={upperFrontForearmsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.FOREARM)}
        />
      </Hint>
      <Hint hint={Muscle.NECK}>
        <img
          src={upperFrontNeckIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.NECK)}
        />
      </Hint>
      <Hint hint={Muscle.ADDUCTOR}>
        <img
          src={lowerFrontAdductorsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.ADDUCTOR)}
        />
      </Hint>
      <Hint hint={Muscle.THIGH}>
        <img
          src={lowerFrontThighsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.THIGH)}
        />
      </Hint>
      <Hint hint={Muscle.HAMSTRING}>
        <img
          src={lowerBackHamstringsIcon}
          className={Styles.bodyIcons}
          onClick={() => handleChange(Muscle.HAMSTRING)}
        />
      </Hint>
    </div>
  );
}

interface Props {
  id: string;
  initialName: string;
  group: Muscle;
  stats: InternalData;
  setStats: React.Dispatch<React.SetStateAction<InternalData>>;
}

function Workout({ id, initialName, group, stats, setStats }: Props) {
  const [open, setOpen] = useState(false);
  const [newGroup, setGroup] = useState(group);
  const [name, setName] = useState(initialName);

  const handleButton = () => {
    setOpen((o) => !o);
  };

  const handleChange = (group: Muscle) => {
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

  const chooseIcon = (group: Muscle) => {
    switch (group) {
      case Muscle.CHEST:
        return <img src={upperFrontChestIcon} className={Styles.bodyIcons} />;
      case Muscle.LEG:
        return <img src={lowerFrontDefaultIcon} className={Styles.bodyIcons} />;
      case Muscle.BACK:
        return <img src={upperBackDefaultIcon} className={Styles.bodyIcons} />;
      case Muscle.ABS:
        return <img src={upperFrontCoreIcon} className={Styles.bodyIcons} />;
      case Muscle.CAVLE:
        return <img src={lowerBackCalvesIcon} className={Styles.bodyIcons} />;
      case Muscle.GLUTE:
        return <img src={lowerBackGlutesIcon} className={Styles.bodyIcons} />;
      case Muscle.BICEP:
        return <img src={upperFrontBicepIcon} className={Styles.bodyIcons} />;
      case Muscle.TRICEP:
        return <img src={upperBackTricepsIcon} className={Styles.bodyIcons} />;
      case Muscle.SHOULDER:
        return (
          <img src={upperFrontShoulderIcon} className={Styles.bodyIcons} />
        );
      case Muscle.TRAP:
        return <img src={upperBackTrapsIcon} className={Styles.bodyIcons} />;
      case Muscle.LATS:
        return <img src={upperBackLatsIcon} className={Styles.bodyIcons} />;
      case Muscle.FOREARM:
        return (
          <img src={upperFrontForearmsIcon} className={Styles.bodyIcons} />
        );
      case Muscle.NECK:
        return <img src={upperFrontNeckIcon} className={Styles.bodyIcons} />;
      case Muscle.ADDUCTOR:
        return (
          <img src={lowerFrontAdductorsIcon} className={Styles.bodyIcons} />
        );
      case Muscle.THIGH:
        return <img src={lowerFrontThighsIcon} className={Styles.bodyIcons} />;
      case Muscle.HAMSTRING:
        return (
          <img src={lowerBackHamstringsIcon} className={Styles.bodyIcons} />
        );
      case Muscle.UPPER_FRONT:
        return <img src={upperFrontDefaultIcon} className={Styles.bodyIcons} />;
      case Muscle.UPPER_BACK:
        return <img src={upperBackDefaultIcon} className={Styles.bodyIcons} />;
      case Muscle.LOWER_FRONT:
        return <img src={lowerFrontDefaultIcon} className={Styles.bodyIcons} />;
      case Muscle.LOWER_BACK:
        return <img src={lowerBackDefaultIcon} className={Styles.bodyIcons} />;
      case Muscle.NONE:
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
