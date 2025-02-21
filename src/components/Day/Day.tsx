import Styles from "./Day.module.css";
import { useState } from "react";

function Day({ day }: { day: string }) {
  const [workout, setWorkout] = useState<string>("");
  const [workouts, setWorkouts] = useState<string[]>([]);

  const handleButton = () => {
    setWorkouts([...workouts, workout]);
    setWorkout("");
  };

  return (
    <div id={Styles.day}>
      <h4>Day {day}</h4>
      <input
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
      ></input>
      <button onClick={handleButton}>Add</button>
      <ul>
        {workouts.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>
    </div>
  );
}

export default Day;
