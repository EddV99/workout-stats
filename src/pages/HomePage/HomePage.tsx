import WorkoutSchedule from "../../components/WorkoutSchedule/WorkoutSchedule";
import { WorkoutDataProvider } from "../../context/WorkoutDataContext";
import Styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div id={Styles.content}>
        <WorkoutDataProvider id="1">
          <WorkoutSchedule />
        </WorkoutDataProvider>
      </div>
    </>
  );
}

export default HomePage;
