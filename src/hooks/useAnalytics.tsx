import { Muscle } from "../data/body";
import { WorkoutData } from "../data/data";

// - reps
// - sets
// - rest time
// - progressive overload
// - muscle group workload
// - personal record
// - progress
function useAnalytics(workouts: WorkoutData[]) {
  type Data = {
    totalReps: number,
    totalSets: number,
    totalRest: number,
    primaryReps: number,
    primarySets: number,
    primaryRest: number,
    secondaryReps: number,
    secondarySets: number,
    secondaryRest: number,
    workoutNamesAsPrimary: Set<String>,
    workoutNamesAsSecondary: Set<String>,
    avgRestTime: number,
  };
  const newData = (): Data => {
    return {
      totalReps: 0, totalSets: 0, totalRest: 0,
      primaryReps: 0, primarySets: 0, primaryRest: 0,
      secondaryReps: 0, secondarySets: 0, secondaryRest: 0,
      workoutNamesAsPrimary: new Set<String>(),
      workoutNamesAsSecondary: new Set<String>(),
      avgRestTime: 0,
    }
  };

  const muscleData = new Map<Muscle, Data>();
  let restDays = 0;


  const calculateAvgRestTime = (muscle: Muscle): number => {
    let indices: number[] = [];

    workouts.forEach((w, i) => {
      w.exercises.forEach((e) => {
        if (e.primary.includes(muscle) && !indices.includes(i)) {
          indices.push(i);
        }
      });
    });
    if (muscle === Muscle.QUADRICEPS) {
      console.log(indices);
    }

    let sum = 0;
    // x x x A
    for (let i = 0; i < indices.length; i++) {
      if (i + 1 < indices.length) {
        sum += (indices[i + 1] - indices[i]) - 1;
      } else {
        sum += (workouts.length - indices.length);
      }
    }
    sum /= indices.length;
    return sum;
  };

  // parse data
  let workedOutPrimary = new Set<Muscle>();
  workouts.forEach(w => {
    if (!w.restDay) {
      w.exercises.forEach(e => {
        e.primary.forEach(p => {

          let v = muscleData.get(p);
          if (!v)
            v = newData();

          if (!workedOutPrimary.has(p)) {
            v.avgRestTime = calculateAvgRestTime(p);
            workedOutPrimary.add(p);
          }

          v.totalReps += e.reps;
          v.totalSets += e.sets;
          v.primaryReps += e.reps;
          v.primarySets += e.sets;
          v.workoutNamesAsPrimary.add(e.name);
          muscleData.set(p, v);
        });
        e.secondary.forEach(s => {
          let v = muscleData.get(s);
          if (!v)
            v = newData();

          v.totalReps += e.reps;
          v.totalSets += e.sets;
          v.secondaryReps += e.reps;
          v.secondarySets += e.sets;
          v.workoutNamesAsSecondary.add(e.name);
          muscleData.set(s, v);
        });
      });
    } else {
      restDays++;
    }
  });

  return { muscleData, restDays };
}

export default useAnalytics;
