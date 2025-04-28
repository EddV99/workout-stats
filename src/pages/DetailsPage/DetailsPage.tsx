// import { useParams } from "react-router";
import Styles from "./DetailsPage.module.css";
import { useWorkoutData } from "../../context/WorkoutDataContext";

function DetailsPage() {
  const { title } = useWorkoutData();

  return (
    <div id={Styles.container}>
      Analytics for {title}
    </div>
  );
}

export default DetailsPage;
