import { useState } from "react";
import { makeExercise } from "../../data/data";
import { Muscle } from "../../data/body";
import Exercise from "../Exercise/Exercise";
import { useWorkoutData } from "../../context/WorkoutDataContext";


interface Props {
  index: number
};

function Workout({ index }: Props) {
  const { workouts, addExercise } = useWorkoutData();

  const [name, setName] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  const handleClick = () => {
    const newExercise = makeExercise(name + Date.now().toString(), name, Muscle.NONE, reps, sets);
    addExercise(index, newExercise)
  };

  let currentWorkouts = workouts.filter((w) => w.index === index)[0];

  return (
    <div>
      {
        currentWorkouts ?
          currentWorkouts.exercises.map((e) => {
            return <Exercise id={e.id} index={index} />
          })
          : ""
      }
      <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Name"></input>
      <input onChange={(e) => setSets(e.target.valueAsNumber)} value={sets} placeholder="Sets" type="number"></input>
      <input onChange={(e) => setReps(e.target.valueAsNumber)} value={reps} placeholder="Reps" type="number"></input>
      <button onClick={handleClick}>Done</button>
    </div>
  );
}

export default Workout; 
