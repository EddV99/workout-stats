import React, { useState } from "react";
import { useWorkoutData } from "../../context/WorkoutDataContext";
import EditText from "../EditText/EditText";

interface Props {
  id: string
  index: number
};

function Exercise({ id, index }: Props) {
  const { getExercise, updateExercise } = useWorkoutData();
  const [edit, setEdit] = useState(false);

  let exercise = getExercise(id, index);

  const handleNameChange = (text: string) => {
    if (!exercise) return;
    updateExercise(index, { ...exercise, name: text });
  };

  const handleClickEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEdit(true);
  };

  const handleClickCancel = () => {
    setEdit(false);
  };
  const handleClickConfirm = () => {
    setEdit(false);
  };

  return (
    <div>
      {
        exercise ?
          edit ? <>
            <EditText text={exercise.name} setText={handleNameChange} />
            <input type="number" value={exercise.sets} placeholder="Sets" />
            <input type="number" value={exercise.reps} placeholder="Reps" />
            <button onClick={handleClickConfirm}>Y</button>
            <button onClick={handleClickCancel}>N</button>
          </>
            :
            <>
              Name: {exercise.name}
              Sets: {exercise.sets}
              Reps: {exercise.reps}
              Group: {exercise.group}
              <button onClick={handleClickEdit}>E</button>
            </>
          : ""

      }
    </div>
  );
}

export default Exercise; 
