import { useState } from "react";
import { makeExercise } from "../../data/data";
import { Muscle } from "../../data/body";
import Exercise from "../Exercise/Exercise";
import { useWorkoutData } from "../../context/WorkoutDataContext";


interface Props {
  index: number
};

function Workout({ index }: Props) {
  const { addWorkout, getWorkout, addExercise } = useWorkoutData();

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
    }
  };

  let currentWorkout = getWorkout(index);
  if (!currentWorkout) {
    addWorkout(index);
    currentWorkout = getWorkout(index);
    if (!currentWorkout) return <>Error: Finding Workout</>;
  }

  return (
    <div>
      {
        currentWorkout.exercises.length > 0 ?
          currentWorkout.exercises.map((e) => {
            return <Exercise id={e.id} index={index} key={e.id} />
          })
          : <div>No exercises added yet</div>
      }
      <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
      <input onChange={(e) => setSets(e.target.valueAsNumber)} value={sets} placeholder="Sets" type="number" />
      <input onChange={(e) => setReps(e.target.valueAsNumber)} value={reps} placeholder="Reps" type="number" />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Workout; 
