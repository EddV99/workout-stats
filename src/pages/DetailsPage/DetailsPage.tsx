import Styles from "./DetailsPage.module.css";
import { useWorkoutData, WorkoutDataProvider } from "../../context/WorkoutDataContext";
import { useParams } from "react-router";
import { ALL_MUSCLE, Muscle } from "../../data/body";


// Need:
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
    <div id={Styles.container}>
      Analytics for {title}
      <Analytics />
    </div>
  );
}

function Analytics() {
  const { workouts } = useWorkoutData();

  const data = new Map<Muscle, { reps: number, sets: number, rest: number }>();
  workouts.forEach(w => {
    w.exercises.forEach(e => {
      e.primary.forEach(p => {
        let v = data.get(p);
        if (!v)
          v = { reps: 0, sets: 0, rest: 0 };
        v.reps += e.reps;
        v.sets += e.sets;
        data.set(p, v);
      });
      e.secondary.forEach(s => {
        let v = data.get(s);
        if (!v)
          v = { reps: 0, sets: 0, rest: 0 };
        v.reps += e.reps;
        v.sets += e.sets;
        data.set(s, v);
      });
    });
  });

  return <div>
    {ALL_MUSCLE.map((mg) => {
      return data.has(mg) ? (
        <div>
          <div>{mg}</div>
          <div>Sets: {data.get(mg)?.sets}</div>
          <div>Reps: {data.get(mg)?.reps}</div>
          <br />
        </div>
      ) : "";
    })}
  </div >;
}


export default DetailsPage;
