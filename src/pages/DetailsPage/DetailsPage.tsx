import Styles from "./DetailsPage.module.css";
import { useWorkoutData, WorkoutDataProvider } from "../../context/WorkoutDataContext";
import { useParams } from "react-router";

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
    </div>
  );
}

export default DetailsPage;
