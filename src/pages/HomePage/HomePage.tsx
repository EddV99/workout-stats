import WorkoutSchedule from "../../components/WorkoutSchedule/WorkoutSchedule";
import Styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div id={Styles.content}>
        <WorkoutSchedule dataId="1" />
      </div>
    </>
  );
}

export default HomePage;
