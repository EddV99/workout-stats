import WorkoutSchedule from "../../components/WorkoutSchedule/WorkoutSchedule";
import Styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div id={Styles.content}>
        <WorkoutSchedule />
      </div>
    </>
  );
}

export default HomePage;
