import { useWorkoutData } from "../../context/WorkoutDataContext";

interface Props {
  id: string
  index: number
  dataId: string;
};

function Exercise({ id, index, dataId }: Props) {
  const { workouts } = useWorkoutData();

  return (
    <div>
      Someint
    </div>
  );
}

export default Exercise; 
