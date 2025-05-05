import Styles from "./DetailsPage.module.css";
import { useWorkoutData, WorkoutDataProvider } from "../../context/WorkoutDataContext";
import { useParams } from "react-router";
import { ALL_MUSCLE } from "../../data/body";
import useAnalytics from "../../hooks/useAnalytics";



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
  const { muscleData, restDays } = useAnalytics(workouts);

  return (
    <div>
      <div>
        # of Rest Days: {restDays}
      </div>
      <div id={Styles.wrapper}>
        {ALL_MUSCLE.map((mg) => {
          return muscleData.has(mg) ? (
            <div id={Styles.group} key={mg}>
              <div id={Styles.primary}>
                <div id={Styles.name}>{mg}</div>
                <div>Total Sets: {muscleData.get(mg)?.totalSets}</div>
                <div>Total Reps: {muscleData.get(mg)?.totalReps}</div>
                <div>Primary Target Sets: {muscleData.get(mg)?.primarySets}</div>
                <div>Primary Target Reps: {muscleData.get(mg)?.primaryReps}</div>
                <div>Secondary Target Sets: {muscleData.get(mg)?.secondarySets}</div>
                <div>Secondary Target Reps: {muscleData.get(mg)?.secondaryReps}</div>
              </div>
              <div>
                <div id={Styles.primary}>
                  <div className={Styles.underline}>Directly Hit With</div>
                  <div id={Styles.workouts}>
                    {Array.from(muscleData.get(mg)?.workoutNamesAsPrimary || []).map((d) => {
                      return <div>{d}</div>;
                    })}
                  </div>
                </div>
                <br />
                <div id={Styles.secondary}>
                  <div className={Styles.underline}>In-Directly Hit With</div>
                  <div id={Styles.workouts}>
                    {Array.from(muscleData.get(mg)?.workoutNamesAsSecondary || []).map((d) => {
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
      </div >
    </div>
  );
}


export default DetailsPage;
