import { Muscle, MuscleArray } from "../../data/body";
import { InternalData } from "../Week/Week";
import Styles from "./Statistics.module.css";

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

  if (data.workouts.length > 0) {
    const maxDay = data.workouts.reduce((i, c) => {
      return Number(i.day) > Number(c.day) ? { ...i } : { ...c };
    }).day;

    let muscleGroupsHit = 0;
    let totalReps = 0;
    let totalSets = 0;
    let totalExercises = 0;
    let dayCount = 0;

    const workouts = MuscleArray.map((muscle, index) => {
      const stats = parseStats(data, muscle);
      if (stats.hasData) {
        muscleGroupsHit++;
        totalReps += stats.reps;
        totalSets += stats.sets;
        totalExercises += stats.count;
        dayCount += stats.dayCount;

        return (
          <div key={muscle + index} id={Styles.stats}>
            <h1>{muscle}</h1>
            <p>
              Work this muscle out <strong>{stats.dayCount}</strong> time(s) in
              a cycle of {maxDay} day(s)
              <br />
              You do a total of <strong>{stats.count} exercise(s)</strong>
              <br />
              You do a total of <strong>{stats.reps} reps</strong>
              <br />
              You do a total of <strong>{stats.sets} sets</strong>
            </p>
          </div>
        );
      }
    });

    return (
      <>
        <div id={Styles.workouts}>{workouts}</div>
        <div id={Styles.total}>
          <u>In this workout cycle of {maxDay} day(s):</u>
          <br />
          <br />
          ({muscleGroupsHit} muscles hit) / ({MuscleArray.length} total
          muscle groups)
          <br />
          {totalReps} total reps
          <br />
          {totalSets} total sets
          <br />
          {totalExercises} total exercises
          <br />
          Muscles worked out an average{" "}
          {(dayCount / muscleGroupsHit).toFixed(1)} time(s)
        </div>
      </>
    );
  } else {
    return <>No data to parse</>;
  }
}

export default Statistics;
