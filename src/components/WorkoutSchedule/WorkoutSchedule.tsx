import useWorkoutData from "../../hooks/useWorkoutData";
import EditText from "../EditText/EditText";
import Workout from "../Workout/Workout";

interface Props {
  dataId: string;
};

function WorkoutSchedule({ dataId }: Props) {

  const { title, setTitle } = useWorkoutData(dataId);

  return (
    <div>
      <h1><EditText text={title} setText={setTitle} /></h1>
      <Workout index={1} dataId={dataId} />
    </div>
  );
}

export default WorkoutSchedule;
