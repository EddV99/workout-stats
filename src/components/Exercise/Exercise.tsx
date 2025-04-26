import { useState } from "react";
import { useWorkoutData } from "../../context/WorkoutDataContext";
import EditText from "../EditText/EditText";

interface Props {
  id: string
  index: number
};

function Exercise({ id, index }: Props) {
  const { getExercise, updateExercise } = useWorkoutData();

  let exercise = getExercise(id, index);

  const handleNameChange = (text: string) => {
    if (!exercise) return;
    if (updateExercise(index, { ...exercise, name: text })) {
      alert("success");
    } else {
      alert("fail");
    }
  };

  return (
    <div>
      {
        exercise ?
          <EditText text={exercise.name} setText={handleNameChange} />
          : ""
      }
    </div>
  );
}

export default Exercise; 
