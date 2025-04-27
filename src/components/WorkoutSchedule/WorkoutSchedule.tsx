import { useWorkoutData } from "../../context/WorkoutDataContext";
import EditText from "../EditText/EditText";
import Workout from "../Workout/Workout";


function WorkoutSchedule() {

  const { title, setTitle, workouts, addWorkout, removeWorkout } = useWorkoutData();

  const handleButton = () => {
    addWorkout(workouts.length + 1);
  };

  const handleRemoveWorkout = (index: number) => {
    removeWorkout(index);
  };

  return (
    <div>
      <h1><EditText text={title} setText={setTitle} /></h1>
      {workouts.map((w) => {
        return <div key={w.id} >
          <Workout index={w.index} />
          <button onClick={() => { handleRemoveWorkout(w.index) }}>X</button>
        </div>
      })}
      <button onClick={handleButton}>+</button>
    </div>
  );
}

export default WorkoutSchedule;
