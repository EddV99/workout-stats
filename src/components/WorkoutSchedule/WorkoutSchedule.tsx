import { useState } from "react";
import useWorkoutData from "../../hooks/useWorkoutData";
import EditText from "../EditText/EditText";

interface Props {
  dataId: string;
};
function WorkoutSchedule({ dataId }: Props) {

  const { data, setTitle } = useWorkoutData(dataId);

  return <h1>
    <EditText text={data.title} setText={setTitle} />
  </h1>;
}

export default WorkoutSchedule;
