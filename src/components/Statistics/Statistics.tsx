import { Muscle, MuscleArray } from "../../muscle/body";
import { InternalData } from "../Week/Week";

interface ParsedData {
  // does this have any relevant data
  hasData: boolean;
  // count of times done in a week
  weeklyCount: number;
  // count of total workouts done
  count: number;
}

interface Props {
  data: InternalData;
}

function Statistics({ data }: Props) {
  const parseStats = (data: InternalData, g: Muscle): ParsedData => {
    const filtered = data.workouts.filter((w) => w.group === g);
    if (filtered.length <= 0) {
      return { hasData: false, weeklyCount: 0, count: 0 };
    }

    const seen: string[] = [];
    let weeklyCount = 0;
    filtered.map((w) => {
      if (!seen.includes(w.day)) {
        seen.push(w.day);
        weeklyCount++;
      }
    });

    return { hasData: true, weeklyCount, count: filtered.length };
  };

  if(data.workouts.length > 0){
  return (
    <>
      {MuscleArray.map((k) => {
        const stats = parseStats(data, k);
        if (stats.hasData) {
          return (
            <p key={k}>
              You do {k} {stats.weeklyCount} times a week <br />
              You do {stats.count} {k} exercies total
            </p>
          );
        } else {
          return null;
        }
      })}
    </>
  );
  } else {
    return <>No data to parse</>;
  }
}

export default Statistics;
