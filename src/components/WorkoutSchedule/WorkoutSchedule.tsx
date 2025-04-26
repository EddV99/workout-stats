import { useWorkoutData } from "../../context/WorkoutDataContext";
import EditText from "../EditText/EditText";
import Workout from "../Workout/Workout";


function WorkoutSchedule() {

  const { title, setTitle } = useWorkoutData();

  return (
    <div>
      <h1><EditText text={title} setText={setTitle} /></h1>
      <Workout index={1} />
    </div>
  );
}

export default WorkoutSchedule;
