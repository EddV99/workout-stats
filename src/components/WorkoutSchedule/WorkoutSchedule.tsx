import Styles from "./WorkoutSchedule.module.css";
import { useState } from "react";
import { useWorkoutData } from "../../context/WorkoutDataContext";
import EditText from "../EditText/EditText";
import Workout from "../Workout/Workout";
import { Link } from "react-router";


function WorkoutSchedule() {

  const { workoutId, title, setTitle, workouts, addWorkout, removeWorkout, getWorkout, updateWorkout } = useWorkoutData();
  const [copyId, setCopyId] = useState("");

  const handleButton = () => {
    addWorkout({ index: workouts.length + 1 });
  };

  const handleRemoveWorkout = (index: number) => {
    removeWorkout({ index });
  };

  const handleCopy = (id: string) => {
    setCopyId(id);
  };
  const handlePaste = (id: string, index: number) => {
    let workoutToCopy = getWorkout({ id: copyId });
    if (workoutToCopy) {
      workoutToCopy = { ...workoutToCopy };
      workoutToCopy.id = id;
      workoutToCopy.index = index;
      updateWorkout({ id, workoutData: { ...workoutToCopy } })
    }
  };

  return (
    <div id={Styles.container} >
      <div id={Styles.top}>
        <div id={Styles.title} ><EditText text={title} setText={setTitle} /></div>
        <Link to={`/details/${workoutId}`} id={Styles.viewDetails} >View Details</Link>
      </div>
      <div id={Styles.workouts} >
        {workouts.map((w) => {
          return <div key={w.id} >
            <Workout index={w.index} />
            <button onClick={() => { handleRemoveWorkout(w.index) }}>X</button>
            <button onClick={() => { handleCopy(w.id) }}>C</button>
            <button onClick={() => { handlePaste(w.id, w.index) }}>P</button>
          </div>
        })}
      </div>
      <button onClick={handleButton}>Add a day</button>
    </div >
  );
}

export default WorkoutSchedule;
