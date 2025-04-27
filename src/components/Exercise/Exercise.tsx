import React, { useState } from "react";
import { useWorkoutData } from "../../context/WorkoutDataContext";
import Styles from "./Exercise.module.css";
import { makeExercise } from "../../data/data";

interface Props {
  id: string
  index: number
};

function Exercise({ id, index }: Props) {
  const { getExercise, updateExercise } = useWorkoutData();

  let exercise = getExercise(id, index);
  if (!exercise) return <div>ERROR: Couldn't find exercise</div>;

  const [edit, setEdit] = useState(false);
  const [exerciseEdit, setExerciseEdit] = useState({
    name: exercise.name,
    sets: exercise.sets,
    reps: exercise.reps,
    group: exercise.group
  });


  const handleClickEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEdit(true);
  };

  const handleClickCancel = () => {
    setEdit(false);
    setExerciseEdit({
      name: exercise.name,
      sets: exercise.sets,
      reps: exercise.reps,
      group: exercise.group
    })
  };

  const handleClickConfirm = () => {
    setEdit(false);
    updateExercise(index, makeExercise(id, exerciseEdit.name, exerciseEdit.group, exerciseEdit.reps, exerciseEdit.sets));
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value, type } = e.target;
    setExerciseEdit(e => ({ ...e, [name]: type === 'number' ? Number(value) : value }));
  };

  return (
    <div>
      {
        exercise ?
          edit ? <>
            <label htmlFor="name">Name</label>
            <input name="name" onChange={handleEditChange} value={exerciseEdit.name} />
            <label htmlFor="sets">Sets</label>
            <input name="sets" onChange={handleEditChange} type="number" value={exerciseEdit.sets} placeholder="Sets" />
            <label htmlFor="reps">Reps</label>
            <input name="reps" onChange={handleEditChange} type="number" value={exerciseEdit.reps} placeholder="Reps" />
            <button onClick={handleClickConfirm}>Y</button>
            <button onClick={handleClickCancel}>N</button>
          </>
            :
            <div id={Styles.exercise}>
              <div>{exercise.name}</div>
              <button onClick={handleClickEdit}>E</button>
            </div>
          : ""
      }
    </div>
  );
}

export default Exercise; 
