import Styles from "./Day.module.css";
import { useState } from "react";
import { muscleGroups } from "./../../muscle/body";
import Workout from "../Workout/Workout";
import { RxCross2 } from "react-icons/rx";

function Day({ day }: { day: string }) {
  const [workout, setWorkout] = useState<string>("");
  const [workouts, setWorkouts] = useState<
    { name: string; group: muscleGroups; id: string }[]
  >([]);

  const handleAddButton = () => {
    const key = workout + Date.now().toString();
    setWorkouts([
      ...workouts,
      { name: workout, group: muscleGroups.NONE, id: key },
    ]);
    setWorkout("");
  };

  const handleDeleteButton = (id: string) => {
    setWorkouts(workouts.filter((item) => item.id !== id));
  };

  return (
    <div id={Styles.day}>
      <h4>Day {day}</h4>
      <input
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
      ></input>
      <button onClick={handleAddButton}>Add</button>
      <ul className={Styles.list}>
        {workouts.map((v) => {
          return (
            <div id={Styles.container} key={v.id}>
              <li className={Styles.listItem}>
                <Workout group={v.group} name={v.name} />
              </li>
              <button
                id={Styles.chooseButton}
                onClick={() => handleDeleteButton(v.id)}
              >
                <RxCross2 id={Styles.icon} size="1.5rem" />
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Day;
