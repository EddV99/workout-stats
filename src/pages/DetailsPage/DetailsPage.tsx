import Styles from "./DetailsPage.module.css";
import { useWorkoutData, WorkoutDataProvider } from "../../context/WorkoutDataContext";
import { useParams } from "react-router";
import { ALL_MUSCLE, Muscle } from "../../data/body";


// - reps
// - sets
// - rest time
// - progressive overload
// - muscle group workload
// - personal record
// - progress

function DetailsPage() {
  const { id } = useParams();
  if (!id) return <>No Workout ID found</>
  return (
    <WorkoutDataProvider id={id || "1"}>
      <Content />
    </WorkoutDataProvider >
  );
}

function Content() {
  const { title } = useWorkoutData();
  return (
    <div id={Styles.container} >
      <div id={Styles.title}>
        Analytics for {title}
      </div>
      <Analytics />
    </div>
  );
}

function Analytics() {
  const { workouts } = useWorkoutData();

  const data = new Map<Muscle, {
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
  }>();

  // parse data
  workouts.forEach(w => {
    w.exercises.forEach(e => {
      e.primary.forEach(p => {
        let v = data.get(p);
        if (!v)
          v = {
            totalReps: 0, totalSets: 0, totalRest: 0,
            primaryReps: 0, primarySets: 0, primaryRest: 0,
            secondaryReps: 0, secondarySets: 0, secondaryRest: 0,
            workoutNamesAsPrimary: new Set<String>(),
            workoutNamesAsSecondary: new Set<String>(),
          };
        v.totalReps += e.reps;
        v.totalSets += e.sets;
        v.primaryReps += e.reps;
        v.primarySets += e.sets;
        v.workoutNamesAsPrimary.add(e.name);
        data.set(p, v);
      });
      e.secondary.forEach(s => {
        let v = data.get(s);
        if (!v)
          v = {
            totalReps: 0, totalSets: 0, totalRest: 0,
            primaryReps: 0, primarySets: 0, primaryRest: 0,
            secondaryReps: 0, secondarySets: 0, secondaryRest: 0,
            workoutNamesAsPrimary: new Set<String>(),
            workoutNamesAsSecondary: new Set<String>(),
          };
        v.totalReps += e.reps;
        v.totalSets += e.sets;
        v.secondaryReps += e.reps;
        v.secondarySets += e.sets;
        v.workoutNamesAsSecondary.add(e.name);
        data.set(s, v);
      });
    });
  });

  return <div id={Styles.wrapper}>
    {ALL_MUSCLE.map((mg) => {
      return data.has(mg) ? (
        <div id={Styles.group} key={mg}>
          <div id={Styles.primary}>
            <div id={Styles.name}>{mg}</div>
            <div>Total Sets: {data.get(mg)?.totalSets}</div>
            <div>Total Reps: {data.get(mg)?.totalReps}</div>
            <div>Primary Target Sets: {data.get(mg)?.primarySets}</div>
            <div>Primary Target Reps: {data.get(mg)?.primaryReps}</div>
            <div>Secondary Target Sets: {data.get(mg)?.secondarySets}</div>
            <div>Secondary Target Reps: {data.get(mg)?.secondaryReps}</div>
          </div>
          <div>
            <div id={Styles.primary}>
              <div className={Styles.underline}>Directly Hit With</div>
              <div id={Styles.workouts}>
                {Array.from(data.get(mg)?.workoutNamesAsPrimary || []).map((d) => {
                  return <div>{d}</div>;
                })}
              </div>
            </div>
            <br />
            <div id={Styles.secondary}>
              <div className={Styles.underline}>In-Directly Hit With</div>
              <div id={Styles.workouts}>
                {Array.from(data.get(mg)?.workoutNamesAsSecondary || []).map((d) => {
                  return <div>{d}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      ) :
        <div id={Styles.groupEmpty} key={mg}>
          <div id={Styles.name}>{mg}</div>
          Not Worked Out ❌
          <br />
        </div>;
    })}
  </div >;
}


export default DetailsPage;
