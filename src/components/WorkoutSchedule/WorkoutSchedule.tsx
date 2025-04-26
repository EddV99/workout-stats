import useWorkoutData from "../../hooks/useWorkoutData";
import EditText from "../EditText/EditText";

interface Props {
  dataId: string;
};

function WorkoutSchedule({ dataId }: Props) {

  const { title, setTitle } = useWorkoutData(dataId);

  return (
    <div>
      <h1><EditText text={title} setText={setTitle} /></h1>
    </div>
  );
}

export default WorkoutSchedule;
