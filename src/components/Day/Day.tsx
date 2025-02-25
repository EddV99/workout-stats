import Styles from "./Day.module.css";
import { useState } from "react";
import { muscleGroups } from "./../../muscle/body";
import Workout from "../Workout/Workout";
import { RxCross2 } from "react-icons/rx";
import { FaRegCopy } from "react-icons/fa";
import { MdContentPaste } from "react-icons/md";
import { Stats } from "../Week/Week";

interface Props {
  day: string;
  copyId: string;
  setCopyId: React.Dispatch<React.SetStateAction<string>>;
  stats: Stats;
  setStats: React.Dispatch<React.SetStateAction<Stats>>;
}

function Day({ day, copyId, setCopyId, stats, setStats }: Props) {
  const [workoutName, setWorkoutName] = useState<string>("");
  const [workouts, setWorkouts] = useState<
    { day: string; name: string; group: muscleGroups; id: string }[]
  >(stats.workouts.filter((item) => item.day === day) || []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddButton();
  };

  const handleAddButton = () => {
    if (workoutName.length > 0) {
      const key = workoutName + Date.now().toString();
      const newWorkout = {
        day: day,
        name: workoutName,
        group: muscleGroups.NONE,
        id: key,
      };
      setWorkouts([...workouts, newWorkout]);
      setStats({ ...stats, workouts: [...stats.workouts, { ...newWorkout }] });
      setWorkoutName("");
    }
  };

  const handleCopy = () => {
    setCopyId(day);
  };
  const handlePaste = () => {
    if (copyId) {
      setWorkouts(stats.workouts.filter((item) => item.day === copyId));
      setStats({
        ...stats,
        workouts: [
          ...stats.workouts.filter((item) => item.day !== day),
          ...stats.workouts
            .filter((item) => item.day === copyId)
            .map((i) => {
              return { ...i, day: day, id: `${i.name}${Date.now()}` };
            }),
        ],
      });
    }
  };

  const handleDeleteButton = (id: string) => {
    setWorkouts(workouts.filter((item) => item.id !== id));
    setStats({
      ...stats,
      workouts: stats.workouts.filter((item) => item.id !== id),
    });
  };

  return (
    <div id={Styles.day}>
      <div id={Styles.header}>
        <h4 id={Styles.dayTitle}>Day {day}</h4>
        <div>
          <button onClick={handleCopy}>
            <FaRegCopy size="1.2rem" />
          </button>
          <button onClick={handlePaste}>
            <MdContentPaste size="1.2rem" />
          </button>
        </div>
      </div>
      <input
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={handleAddButton}>Add</button>
      <ul className={Styles.list}>
        {workouts.map((v) => {
          return (
            <div id={Styles.container} key={v.id}>
              <li className={Styles.listItem}>
                <Workout
                  id={v.id}
                  group={v.group}
                  initialName={v.name}
                  stats={stats}
                  setStats={setStats}
                />
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
