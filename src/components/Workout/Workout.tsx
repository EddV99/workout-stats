import Styles from "./Workout.module.css";
import { useEffect, useRef, useState } from "react";
import { makeExercise } from "../../data/data";
import { Muscle } from "../../data/body";
import Exercise from "../Exercise/Exercise";
import { useWorkoutData } from "../../context/WorkoutDataContext";


interface Props {
  index: number
};

function Workout({ index }: Props) {
  const { addWorkout, getWorkout, addExercise, removeExercise } = useWorkoutData();
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  const handleClick = () => {
    if (name.trim().length > 0) {
      const newExercise = makeExercise(name + Date.now().toString(), name, Muscle.NONE, reps, sets);
      addExercise(index, newExercise)
      setName("");
      setSets(0);
      setReps(0);
      nameInputRef.current?.focus();
    }
  };

  const handleRemoveExercise = (index: number, id: string) => {
    removeExercise(index, id);
  };

  let currentWorkout = getWorkout({ index });
  useEffect(() => {
    if (!currentWorkout) {
      addWorkout({ index });
    }
    currentWorkout = getWorkout({ index });
  }, [currentWorkout, index])

  if (!currentWorkout) return <div>Error: Finding Workout</div>;

  return (
    <div id={Styles.workout}>
      <h3>Day {index}</h3>
      <div id={Styles.exercises} >
        {
          currentWorkout.exercises.length > 0 ?
            currentWorkout.exercises.map((e) => {
              return (
                <div key={e.id} id={Styles.exerciseContainer}>
                  <Exercise id={e.id} index={index} />
                  <button onClick={() => handleRemoveExercise(currentWorkout!.index, e.id)}>D</button>
                </div>
              )
            })
            : <div>No exercises added yet</div>
        }
      </div>
      <div id={Styles.inputContainer}>
        <div>
          <div id={Styles.name} >
            Name:
            <input ref={nameInputRef} onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
          </div>
          <div id={Styles.sets} >
            Sets:
            <input onChange={(e) => setSets(e.target.valueAsNumber)} value={sets} placeholder="Sets" type="number" />
          </div>
          <div id={Styles.reps}>
            Reps:
            <input onChange={(e) => setReps(e.target.valueAsNumber)} value={reps} placeholder="Reps" type="number" />
          </div>
        </div>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}

export default Workout; 
