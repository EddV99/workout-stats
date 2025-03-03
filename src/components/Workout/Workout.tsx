import Styles from "./Workout.module.css";
import { RxCross2, RxValueNone } from "react-icons/rx";
import { Muscle } from "../../muscle/body";

import { useEffect, useRef, useState } from "react";
import { InternalData } from "../Week/Week";
import { muscleToIcon } from "../../muscle/icons";
import MuscleGroupSelection from "../MuscleGroupSelection/MuscleGroupSelection";
import { MdEdit } from "react-icons/md";

interface Props {
  id: string;
  handleDeleteButton: (id: string) => void;
  stats: InternalData;
  setStats: React.Dispatch<React.SetStateAction<InternalData>>;
}

function Workout({ id, handleDeleteButton, stats, setStats }: Props) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const setRef = useRef<HTMLInputElement>(null);
  const repRef = useRef<HTMLInputElement>(null);

  const handleButton = () => {
    setOpen((o) => !o);
  };

  const handleMuscleGroupChange = (group: Muscle) => {
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

  const handleNameChange = (name: string) => {
    setStats({
      ...stats,
      workouts: stats.workouts.map((w) => {
        const workout = { ...w };
        if (w.id === id) {
          workout.name = name;
        }
        return workout;
      }),
    });
  };

  const handleRepsChange = (reps: number) => {
    setStats({
      ...stats,
      workouts: stats.workouts.map((w) => {
        const workout = { ...w };
        if (w.id === id) {
          workout.reps = reps;
        }
        return workout;
      }),
    });
  };

  const handleSetsChange = (sets: number) => {
    setStats({
      ...stats,
      workouts: stats.workouts.map((w) => {
        const workout = { ...w };
        if (w.id === id) {
          workout.sets = sets;
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
  return editing ? (
    <div id={Styles.editContainer}>
      <button id={Styles.editButton} onClick={() => setEditing(false)}>
        <MdEdit size={15} />
      </button>
      Name:
      <input
        ref={nameRef}
        value={thisWorkout.name}
        onChange={(e) => handleNameChange(e.target.value)}
      ></input>
      Reps:
      <input
        ref={repRef}
        value={thisWorkout.reps}
        type="number"
        onChange={(e) => handleRepsChange(Number(e.target.value))}
      ></input>
      Sets:
      <input
        ref={setRef}
        value={thisWorkout.sets}
        type="number"
        onChange={(e) => handleSetsChange(Number(e.target.value))}
      ></input>
      <button id={Styles.chooseButton} onClick={handleButton}>
        {chooseIcon(thisWorkout.group)}
        {open ? (
          <MuscleGroupSelection handleChange={handleMuscleGroupChange} />
        ) : null}
      </button>
      <button
        id={Styles.chooseButton}
        onClick={() => handleDeleteButton(thisWorkout.id)}
      >
        <RxCross2 id={Styles.icon} size="1.5rem" />
      </button>
    </div>
  ) : (
    <div className={Styles.container}>
      <button id={Styles.editButton} onClick={() => setEditing(true)}>
        <MdEdit size={15} />
      </button>
      <div id={Styles.name}>{thisWorkout.name}</div>
    </div>
  );
}

export default Workout;
