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
  workouts: { day: string; name: string; group: Muscle; id: string }[];
}

interface Props {
  id: string;
  data?: InternalData;
}

function Week({ id, data }: Props) {
  const [title, setTitle] = useState(data?.title || "Workout");

  const [maxDay, setMaxDays] = useState(
    data && data.workouts.length > 0
      ? Number(
          data.workouts.reduce((max, c) => {
            return Number(c.day) > Number(max.day) ? c : max;
          }).day,
        )
      : 1,
  );

  const [stats, setStats] = useState<InternalData>(
    data || { title: title, workouts: [] },
  );

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(stats));
  }, [id, stats]);

  // Hoisted up for Day components
  const [copyId, setCopyId] = useState("");

  const handleAddButton = () => {
    setMaxDays((d) => d + 1);
  };

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
          {[...Array(Number(maxDay))].map((v, i) => {
            return (
              <Day
                key={v || i}
                day={(i + 1).toString()}
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
