import Styles from "./Week.module.css";
import Day from "../Day/Day";
import { useEffect, useState } from "react";
import EditableText from "../EditableText/EditableText";
import { muscleGroups } from "../../muscle/body";
import { Link } from "react-router";

export interface Stats {
  title: string;
  workouts: { day: string; name: string; group: muscleGroups; id: string }[];
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
  }, [id, stats]);
  const [copyId, setCopyId] = useState("");

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
          <Day
            day="1"
            copyId={copyId}
            setCopyId={setCopyId}
            stats={stats}
            setStats={setStats}
          />
          <Day
            day="2"
            copyId={copyId}
            setCopyId={setCopyId}
            stats={stats}
            setStats={setStats}
          />
          <Day
            day="3"
            copyId={copyId}
            setCopyId={setCopyId}
            stats={stats}
            setStats={setStats}
          />
          <Day
            day="4"
            copyId={copyId}
            setCopyId={setCopyId}
            stats={stats}
            setStats={setStats}
          />
          <Day
            day="5"
            copyId={copyId}
            setCopyId={setCopyId}
            stats={stats}
            setStats={setStats}
          />
          <Day
            day="6"
            copyId={copyId}
            setCopyId={setCopyId}
            stats={stats}
            setStats={setStats}
          />
          <Day
            day="7"
            copyId={copyId}
            setCopyId={setCopyId}
            stats={stats}
            setStats={setStats}
          />
        </div>
        <Link id={Styles.viewDetails} to={`/details/${id}`}>
          View Details
        </Link>
      </div>
    </>
  );
}

export default Week;
