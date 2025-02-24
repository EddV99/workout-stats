import Styles from "./Week.module.css";
import Day from "../Day/Day";
import { useEffect, useState } from "react";
import EditableText from "../EditableText/EditableText";
import { muscleGroups } from "../../muscle/body";

export interface Stats {
  title: string;
  workouts: { day: string, name: string; group: muscleGroups; id: string }[];
}
interface Props {
  id: string;
  loadStat?: Stats;
}
function Week({ id, loadStat }: Props) {
  const [title, setTitle] = useState(loadStat?.title || "Workout");
  const [stats, setStats] = useState<Stats>(
    loadStat || { title: title, workouts: [] },
  );

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(stats));
  }, [stats]);

  return (
    <>
      <div id={Styles.container}>
        <div id={Styles.title}>
          <EditableText
            text={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setStats({ ...stats, title: e.target.value });
            }}
          />
        </div>
        <div id={Styles.week}>
          <Day day="1" stats={stats} setStats={setStats} />
          <Day day="2" stats={stats} setStats={setStats} />
          <Day day="3" stats={stats} setStats={setStats} />
          <Day day="4" stats={stats} setStats={setStats} />
          <Day day="5" stats={stats} setStats={setStats} />
          <Day day="6" stats={stats} setStats={setStats} />
          <Day day="7" stats={stats} setStats={setStats} />
        </div>
        <span id={Styles.viewDetails}>View Details</span>
      </div>
    </>
  );
}

export default Week;
