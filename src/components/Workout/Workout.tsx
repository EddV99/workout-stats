import Styles from "./Workout.module.css";
import { RxValueNone } from "react-icons/rx";
import { Muscle } from "../../muscle/body";

import { useState } from "react";
import EditableText from "../EditableText/EditableText";
import { InternalData } from "../Week/Week";
import icons from "../../muscle/icons";
import MuscleGroupSelection from "../MuscleGroupSelection/MuscleGroupSelection";

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
        return (
          <img src={icons.upperFrontChestIcon} className={Styles.bodyIcons} />
        );
      case Muscle.LEG:
        return (
          <img src={icons.lowerFrontDefaultIcon} className={Styles.bodyIcons} />
        );
      case Muscle.BACK:
        return (
          <img src={icons.upperBackDefaultIcon} className={Styles.bodyIcons} />
        );
      case Muscle.ABS:
        return (
          <img src={icons.upperFrontCoreIcon} className={Styles.bodyIcons} />
        );
      case Muscle.CAVLE:
        return (
          <img src={icons.lowerBackCalvesIcon} className={Styles.bodyIcons} />
        );
      case Muscle.GLUTE:
        return (
          <img src={icons.lowerBackGlutesIcon} className={Styles.bodyIcons} />
        );
      case Muscle.BICEP:
        return (
          <img src={icons.upperFrontBicepIcon} className={Styles.bodyIcons} />
        );
      case Muscle.TRICEP:
        return (
          <img src={icons.upperBackTricepsIcon} className={Styles.bodyIcons} />
        );
      case Muscle.SHOULDER:
        return (
          <img
            src={icons.upperFrontShoulderIcon}
            className={Styles.bodyIcons}
          />
        );
      case Muscle.TRAP:
        return (
          <img src={icons.upperBackTrapsIcon} className={Styles.bodyIcons} />
        );
      case Muscle.LATS:
        return (
          <img src={icons.upperBackLatsIcon} className={Styles.bodyIcons} />
        );
      case Muscle.FOREARM:
        return (
          <img
            src={icons.upperFrontForearmsIcon}
            className={Styles.bodyIcons}
          />
        );
      case Muscle.NECK:
        return (
          <img src={icons.upperFrontNeckIcon} className={Styles.bodyIcons} />
        );
      case Muscle.ADDUCTOR:
        return (
          <img
            src={icons.lowerFrontAdductorsIcon}
            className={Styles.bodyIcons}
          />
        );
      case Muscle.THIGH:
        return (
          <img src={icons.lowerFrontThighsIcon} className={Styles.bodyIcons} />
        );
      case Muscle.HAMSTRING:
        return (
          <img
            src={icons.lowerBackHamstringsIcon}
            className={Styles.bodyIcons}
          />
        );
      case Muscle.UPPER_FRONT:
        return (
          <img src={icons.upperFrontDefaultIcon} className={Styles.bodyIcons} />
        );
      case Muscle.UPPER_BACK:
        return (
          <img src={icons.upperBackDefaultIcon} className={Styles.bodyIcons} />
        );
      case Muscle.LOWER_FRONT:
        return (
          <img src={icons.lowerFrontDefaultIcon} className={Styles.bodyIcons} />
        );
      case Muscle.LOWER_BACK:
        return (
          <img src={icons.lowerBackDefaultIcon} className={Styles.bodyIcons} />
        );
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
        {open ? <MuscleGroupSelection handleChange={handleChange} /> : null}
      </button>
    </div>
  );
}

export default Workout;
