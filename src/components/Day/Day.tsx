import Styles from "./Day.module.css";
import { useState } from "react";
import { Muscle } from "./../../muscle/body";
import Workout from "../Workout/Workout";
import { RxCross2 } from "react-icons/rx";
import { FaRegCopy } from "react-icons/fa";
import { MdContentPaste } from "react-icons/md";
import { InternalData } from "../Week/Week";
import Hint from "../Hint/Hint";

interface Props {
  day: number;
  copyId: number | undefined;
  setCopyId: React.Dispatch<React.SetStateAction<number | undefined>>;
  stats: InternalData;
  setStats: React.Dispatch<React.SetStateAction<InternalData>>;
}

function Day({ day, copyId, setCopyId, stats, setStats }: Props) {
  // ------- state --------
  const [newWorkoutName, setNewWorkoutName] = useState<string>("");
  const [newWorkoutReps, setNewWorkoutReps] = useState(0);
  const [newWorkoutSets, setNewWorkoutSets] = useState(0);

  // ------- handle --------
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddButton();
  };

  const handleAddButton = () => {
    if (newWorkoutName.length > 0) {
      const key = newWorkoutName + Date.now().toString();
      const newWorkout = {
        day: day,
        name: newWorkoutName,
        group: Muscle.NONE,
        sets: newWorkoutSets,
        reps: newWorkoutReps,
        id: key,
      };
      setStats({ ...stats, workouts: [...stats.workouts, { ...newWorkout }] });
      setNewWorkoutName("");
    }
  };

  const handleCopy = () => {
    setCopyId(day);
  };

  const handlePaste = () => {
    if (copyId) {
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
    setStats({
      ...stats,
      workouts: stats.workouts.filter((item) => item.id !== id),
    });
  };

  return (
    <div id={Styles.day}>
      <div id={Styles.header}>
        <h4 id={Styles.dayTitle}>Day {day}</h4>
        <div id={Styles.tools}>
          <Hint hint="Copy">
            <button onClick={handleCopy}>
              <FaRegCopy size="1.2rem" />
            </button>
          </Hint>
          <Hint hint="Paste">
            <button onClick={handlePaste}>
              <MdContentPaste size="1.2rem" />
            </button>
          </Hint>
        </div>
      </div>
      <div id={Styles.info}>
        <div id={Styles.infoRow}>
          Name:
          <input
            value={newWorkoutName}
            onChange={(e) => setNewWorkoutName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Name"
          />
        </div>
        <div id={Styles.infoRow}>
          Reps:
          <input
            value={newWorkoutReps}
            onChange={(e) => setNewWorkoutReps(Number(e.target.value))}
            onKeyDown={handleKeyDown}
            type="number"
            min="0"
            max="10000"
            step="1"
            placeholder="# of Reps"
          />
        </div>
        <div id={Styles.infoRow}>
          Sets:
          <input
            value={newWorkoutSets}
            onChange={(e) => setNewWorkoutSets(Number(e.target.value))}
            onKeyDown={handleKeyDown}
            type="number"
            min="0"
            max="10000"
            step="1"
            placeholder="# of Sets"
          />
        </div>
        <button onClick={handleAddButton}>Add</button>
      </div>
      <ul className={Styles.list}>
        {stats.workouts
          .filter((i) => i.day === day)
          .map((v) => {
            return (
              <div id={Styles.container} key={v.id}>
                <li className={Styles.listItem}>
                  <Workout id={v.id} stats={stats} setStats={setStats} />
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
