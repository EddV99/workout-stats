import { Muscle, MuscleArray } from "../../muscle/body";
import { InternalData } from "../Week/Week";

interface ParsedData {
  // does this have any relevant data
  hasData: boolean;
  // count of days doing this muscle group
  dayCount: number;
  // count of total workouts done
  count: number;
  // count of total reps
  reps: number;
  // count of total sets
  sets: number;
}

interface Props {
  data: InternalData;
}

function Statistics({ data }: Props) {
  const parseStats = (data: InternalData, g: Muscle): ParsedData => {
    const filtered = data.workouts.filter((w) => w.group === g);
    if (filtered.length <= 0) {
      return { hasData: false, dayCount: 0, count: 0, reps: 0, sets: 0 };
    }

    const seen: number[] = [];
    let dayCount = 0;
    filtered.map((w) => {
      if (!seen.includes(w.day)) {
        seen.push(w.day);
        dayCount++;
      }
    });

    let reps = 0;
    let sets = 0;
    filtered.forEach((i) => {
      reps += i.reps;
      sets += i.sets;
    });

    return {
      hasData: true,
      dayCount: dayCount,
      count: filtered.length,
      reps,
      sets,
    };
  };

  const maxDay = data.workouts.reduce((i, c) => {
    return Number(i.day) > Number(c.day) ? { ...i } : { ...c };
  }).day;

  if (data.workouts.length > 0) {
    return (
      <>
        {MuscleArray.map((muscle, index) => {
          const stats = parseStats(data, muscle);
          if (stats.hasData) {
            return (
              <div key={muscle + index}>
                <h1>{muscle}</h1>
                <p>
                  Work this muscle out {stats.dayCount} time(s) in a cycle of{" "}
                  {maxDay} day(s)
                  <br />
                  You do a total of {stats.count} exercies total
                  <br />
                  You do a total of {stats.reps} reps total
                  <br />
                  You do a total of {stats.sets} sets total
                </p>
              </div>
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
