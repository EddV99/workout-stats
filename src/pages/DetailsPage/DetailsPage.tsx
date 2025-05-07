import Styles from "./DetailsPage.module.css";
import GStyles from "../../GlobalStyle.module.css";
import { useWorkoutData, WorkoutDataProvider } from "../../context/WorkoutDataContext";
import { useParams, Link } from "react-router";
import { ALL_MUSCLE } from "../../data/body";
import useAnalytics from "../../hooks/useAnalytics";
import { useState } from "react";



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
        <div>
        <Link to="/">
        Home
        </Link>
        <div id={Styles.title}>
            Analytics for {title}
        </div>
        </div>
        <Analytics />
    </div>
  );
}

function Analytics() {

  enum ViewTypes {
    SINGLE_COLUMN,
    GRID,
  };

  const getStyleClass = (type: ViewTypes) => {
    switch (type) {
      case ViewTypes.SINGLE_COLUMN:
        return Styles.column;
      case ViewTypes.GRID:
        return Styles.grid;
    }
  }
  const [viewType, setViewType] = useState(ViewTypes.GRID);
  const handleChangeType = (type: ViewTypes) => {
    setViewType(type);
  }

  const { workouts } = useWorkoutData();
  const { muscleData, restDays } = useAnalytics(workouts);

  return (
    <div>
        <div id={Styles.viewTypesContainer}>
            <div className={GStyles.button} onClick={() => handleChangeType(ViewTypes.SINGLE_COLUMN)}>
                .
            </div>
            <div className={GStyles.button} onClick={() => handleChangeType(ViewTypes.GRID)}>
                ...
            </div>
        </div>
        <div className={getStyleClass(viewType)}>
            {ALL_MUSCLE.map((mg) => {
              let m = muscleData.get(mg);
              let hitDirectly = (m?.primarySets || 0) > 0 || (m?.primaryReps || 0) > 0;

              return m ? (
                <div id={Styles.group} key={mg}>
                    <div id={Styles.primary}>
                        <div id={Styles.name}>{mg}</div>
                        <div>Total Sets: {m.totalSets}</div>
                        <div>Total Reps: {m.totalReps}</div>
                        <div>Primary Target Sets: {m.primarySets}</div>
                        <div>Primary Target Reps: {m.primaryReps}</div>
                        <div>Secondary Target Sets: {m.secondarySets}</div>
                        <div>Secondary Target Reps: {m.secondaryReps}</div>
                        <div>Average Rest Time: {hitDirectly ? `${m.avgRestTime} day(s)` : "N/A"}</div>
                    </div>
                    <div>
                        <div id={Styles.primary}>
                            <div className={Styles.underline}>Directly Hit With</div>
                            <div id={Styles.workouts}>
                                {Array.from(muscleData.get(mg)?.workoutNamesAsPrimary || []).map((d) => {
                                  return <div key={d.toString()}>{d}</div>;
                                })}
                            </div>
                        </div>
                        <br />
                        <div id={Styles.secondary}>
                            <div className={Styles.underline}>In-Directly Hit With</div>
                            <div id={Styles.workouts}>
                                {Array.from(muscleData.get(mg)?.workoutNamesAsSecondary || []).map((d) => {
                                  return <div key={d.toString()}>{d}</div>;
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
