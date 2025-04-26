import { useState } from "react";
import useWorkoutData from "../../hooks/useWorkoutData";
import { makeExercise } from "../../data/data";
import { Muscle } from "../../data/body";


interface Props {
  index: number
  dataId: string;
};

function Workout({ index, dataId }: Props) {
  const { workouts, addExercise } = useWorkoutData(dataId);

  const [name, setName] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  const handleClick = () => {
    const newExercise = makeExercise(name + Date.now().toString(), name, Muscle.NONE, reps, sets);
    addExercise(index, newExercise)
  };

  let currentWorkouts = workouts.filter((w) => w.index === index);
  return (
    <div>
      {currentWorkouts.length === 0 ? <h2>No Exercises</h2> : <h2>Exercises</h2>}
      <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Name"></input>
      <input onChange={(e) => setSets(e.target.valueAsNumber)} value={sets} placeholder="Sets" type="number"></input>
      <input onChange={(e) => setReps(e.target.valueAsNumber)} value={reps} placeholder="Reps" type="number"></input>
      <button onClick={handleClick}>Done</button>
    </div>
  );
}

export default Workout; 
