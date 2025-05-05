import Styles from "./Workout.module.css";
import { useEffect, useRef, useState } from "react";
import { makeExercise, WorkoutData } from "../../data/data";
import { Muscle } from "../../data/body";
import Exercise from "../Exercise/Exercise";
import { useWorkoutData } from "../../context/WorkoutDataContext";
import MuscleGroupSelection from "../MuscleGroupSelection/MuscleGroupSelection";
import { data } from "../../data/workout-data.ts";
import Fuse from "fuse.js";

interface Props {
  index: number
  children?: React.ReactNode
};


function Workout({ index, children }: Props) {
  const { addWorkout, getWorkout, removeExercise } = useWorkoutData();
  let currentWorkout = getWorkout({ index });
  useEffect(() => {
    if (!currentWorkout) {
      addWorkout({ index });
    }
    currentWorkout = getWorkout({ index });
  }, [currentWorkout, index])

  if (!currentWorkout) return <div>Error: Finding Workout</div>;

  return (
    <div id={Styles.workout} className={currentWorkout.restDay ? Styles.grey : ""}>
      <WorkoutInfo workout={currentWorkout} handleRemoveExercise={removeExercise} />
      <AddExercise index={index} />
      {children}
    </div>
  );
}

function WorkoutInfo({ workout, handleRemoveExercise }: { workout: WorkoutData, handleRemoveExercise: (index: number, id: string) => void }) {
  const { updateWorkout } = useWorkoutData();
  const handleRestButton = () => {
    updateWorkout({ id: workout.id, workoutData: { ...workout, restDay: !workout.restDay } });
  };

  return <>
    <div id={Styles.header}>
      <h3>Day {workout.index}</h3>
      <div id={Styles.restButton} onClick={handleRestButton}>REST</div>
    </div>
    <div id={Styles.exercises} >
      {
        workout.exercises.length > 0 ?
          workout.exercises.map((e) => {
            return (
              <div key={e.id} id={Styles.exerciseContainer}>
                <Exercise id={e.id} index={workout.index} />
                <button onClick={() => handleRemoveExercise(workout.index, e.id)}>D</button>
              </div>
            )
          })
          : <div>No exercises added yet</div>
      }
    </div>
  </>
}
function AddExercise({ index }: { index: number }) {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [showSearch, setShowSearch] = useState(false);

  const [primaryMuscleGroup, setPrimaryMuscleGroup] = useState<Muscle[]>([]);
  const [secondaryMuscleGroup, setSecondaryMuscleGroup] = useState<Muscle[]>([]);
  const [name, setName] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const { addExercise } = useWorkoutData();

  const handleAddExercise = () => {
    if (name.trim().length > 0) {
      const newExercise = makeExercise(name + Date.now().toString(), name, [...primaryMuscleGroup], [...secondaryMuscleGroup], reps, sets);
      setPrimaryMuscleGroup([]);
      setSecondaryMuscleGroup([]);
      addExercise(index, newExercise)
      setName("");
      setSets(0);
      setReps(0);
      nameInputRef.current?.focus();
    }
  };

  const handleSearchChoice = ({ name, primaryMuscles, secondaryMuscles }: { name: string, primaryMuscles: Muscle[], secondaryMuscles: Muscle[] }) => {
    setName(name);
    setPrimaryMuscleGroup(primaryMuscles);
    setSecondaryMuscleGroup(secondaryMuscles);
  };


  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        nameInputRef.current &&
        !nameInputRef.current.contains(e.target as Node) &&
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setShowSearch(false);
      }
    }

    document.addEventListener('mouseup', handleClickOutside);
    return () => document.removeEventListener('mouseup', handleClickOutside);
  }, []);

  return (
    <div id={Styles.inputContainer}>
      <div>
        <div id={Styles.name}
          onFocus={() => setShowSearch(true)}
        >
          Name:
          <input
            ref={nameInputRef}
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name" />
          <ExerciseSearch name={name} ref={searchRef} setShow={setShowSearch} show={showSearch} handleChoice={handleSearchChoice} />
        </div>
        <div id={Styles.sets} >
          Sets:
          <input onChange={(e) => setSets(e.target.valueAsNumber)} value={sets} placeholder="Sets" type="number" />
        </div>
        <div id={Styles.reps}>
          Reps:
          <input onChange={(e) => setReps(e.target.valueAsNumber)} value={reps} placeholder="Reps" type="number" />
        </div>
        <MuscleGroupSelection
          label="Primary Muscles"
          selection={primaryMuscleGroup}
          setSelection={setPrimaryMuscleGroup} />
        <MuscleGroupSelection
          label="Secondary Muscles"
          selection={secondaryMuscleGroup}
          setSelection={setSecondaryMuscleGroup} />
      </div>
      <button onClick={handleAddExercise}>Add</button>
    </div>
  );

}

function ExerciseSearch({ name, show, ref, setShow, handleChoice }: {
  name: string,
  show: boolean,
  ref: React.RefObject<HTMLDivElement | null>
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  handleChoice: ({ }: { name: string, primaryMuscles: Muscle[], secondaryMuscles: Muscle[] }) => void
}) {
  if (name.trim().length === 0 || !show) return <></>;

  const fuseOptions = {
    keys: ["name"]
  };
  const fuse = new Fuse(data, fuseOptions);

  let first = true;
  return (
    <div id={Styles.search} ref={ref} >
      {fuse.search(name).map((w) => {
        let style = !first ? Styles.topBorder : "";
        first = false;
        return (
          <div id={Styles.result} className={style} key={w.item.name} onClick={() => {
            handleChoice(w.item);
            setShow(false);
          }}>
            {w.item.name}
          </div>
        )
      })}
    </div>
  );
}

export default Workout; 
