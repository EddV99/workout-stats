import { useWorkoutData } from "../../context/WorkoutDataContext";
import EditText from "../EditText/EditText";
import Workout from "../Workout/Workout";


function WorkoutSchedule() {

  const { title, setTitle, workouts, addWorkout } = useWorkoutData();

  const handleButton = () => {
    addWorkout(workouts.length + 1)
  };

  return (
    <div>
      <h1><EditText text={title} setText={setTitle} /></h1>
      {workouts.map((w) => <Workout key={w.id} index={w.index} />)}
      <button onClick={handleButton}>+</button>
    </div>
  );
}

export default WorkoutSchedule;
