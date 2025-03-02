import Styles from "./Week.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Muscle } from "../../muscle/body";
import { IoMdAdd } from "react-icons/io";
import EditableText from "../EditableText/EditableText";
import Day from "../Day/Day";

/**
 * Format of data saved to local storage
 */
export interface InternalData {
  title: string;
  workouts: {
    day: number;
    name: string;
    group: Muscle;
    id: string;
    reps: number;
    sets: number;
  }[];
}

interface Props {
  id: string;
  data?: InternalData;
}

function Week({ id, data }: Props) {
  // ------- state --------
  const [maxDay, setMaxDays] = useState(
    data && data.workouts.length > 0
      ? data.workouts.reduce((max, c) => {
          return c.day > max.day ? c : max;
        }).day
      : 1,
  );
  const [stats, setStats] = useState<InternalData>(
    data || { title: "Workout", workouts: [] },
  );

  // ------- effect --------
  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(stats));
  }, [id, stats]);

  // ------- hoist --------
  const [copyId, setCopyId] = useState<number | undefined>(undefined);

  // ------- handle --------
  const handleAddButton = () => {
    setMaxDays((d) => d + 1);
  };

  return (
    <>
      <div id={Styles.container}>
        <div id={Styles.title}>
          <EditableText
            text={stats.title}
            onChange={(e) => {
              setStats({ ...stats, title: e.target.value });
            }}
          />
        </div>
        <div id={Styles.week}>
          {[...Array(maxDay)].map((v, i) => {
            return (
              <Day
                key={v || i}
                day={i + 1}
                copyId={copyId}
                setCopyId={setCopyId}
                stats={stats}
                setStats={setStats}
              />
            );
          })}
          <button id={Styles.addButton} onClick={handleAddButton}>
            <IoMdAdd />
          </button>
        </div>
        <Link id={Styles.viewDetails} to={`/details/${id}`}>
          View Details
        </Link>
      </div>
    </>
  );
}

export default Week;
