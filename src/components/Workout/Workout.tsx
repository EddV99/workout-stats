import Styles from "./Workout.module.css";
import { RxValueNone } from "react-icons/rx";
import { Muscle } from "../../muscle/body";

import { useState } from "react";
import EditableText from "../EditableText/EditableText";
import { InternalData } from "../Week/Week";
import { muscleToIcon } from "../../muscle/icons";
import MuscleGroupSelection from "../MuscleGroupSelection/MuscleGroupSelection";

interface Props {
  id: string;
  stats: InternalData;
  setStats: React.Dispatch<React.SetStateAction<InternalData>>;
}

function Workout({ id, stats, setStats }: Props) {
  const [open, setOpen] = useState(false);

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
  };

  const chooseIcon = (group: Muscle) => {
    if (group === Muscle.NONE) return <RxValueNone size="1.2rem" />;
    return <img src={muscleToIcon(group)} className={Styles.bodyIcons} />;
  };

  const thisWorkout = stats.workouts.filter((i) => i.id === id)[0];
  return (
    <div className={Styles.container}>
      <div id={Styles.name}>
        <EditableText
          text={thisWorkout.name}
          onChange={(e) => {
            setStats({
              ...stats,
              workouts: stats.workouts.map((w) => {
                const workout = { ...w };
                if (w.id === id) workout.name = e.target.value;
                return workout;
              }),
            });
          }}
        />
      </div>
      <button id={Styles.chooseButton} onClick={handleButton}>
        {chooseIcon(thisWorkout.group)}
        {open ? <MuscleGroupSelection handleChange={handleChange} /> : null}
      </button>
    </div>
  );
}

export default Workout;
