import { useEffect, useState, createContext, useContext } from "react";
import { ExerciseData, makeWorkout, WorkoutData } from "../data/data";


interface WorkoutContextType {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  workouts: WorkoutData[]
  setWorkouts: React.Dispatch<React.SetStateAction<WorkoutData[]>>
  getWorkout: (index: number) => WorkoutData | undefined
  addWorkout: (index: number) => void
  getExercise: (id: string, index: number) => ExerciseData | undefined
  addExercise: (index: number, exercise: ExerciseData) => void
  updateExercise: (index: number, exercise: ExerciseData) => boolean
}

export const WorkoutDataContext = createContext<WorkoutContextType | undefined>(undefined);

interface Props {
  id: string
  children: React.ReactNode
}

export function WorkoutDataProvider({ id, children }: Props) {

  const [title, setTitle] = useState<string>(() => {
    try {
      const stored = localStorage.getItem(id);
      if (stored) {
        let parsedData = JSON.parse(stored);
        return parsedData.title;
      } else {
        return "Workouts";
      }
    } catch {
      return "Workouts";
    }
  });

  const [workouts, setWorkouts] = useState<WorkoutData[]>(
    () => {
      try {
        const stored = localStorage.getItem(id);
        if (stored) {
          let parsedData = JSON.parse(stored);
          return parsedData.workouts;
        } else {
          return [];
        }
      } catch {
        return [];
      }

    }
  );

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify({ title: title, workouts: [...workouts] }));
  }, [id, title, workouts]);


  const getWorkout = (index: number) => {
    return workouts.filter((w) => w.index === index)[0];
  }

  const addWorkout = (index: number) => {
    let newWorkout = makeWorkout(`${index}${Date.now().toString()}`, index, []);
    setWorkouts((w) => [...w, newWorkout]);
  }

  const addExercise = (index: number, exercise: ExerciseData) => {
    let hasIndex = workouts.filter((w) => w.index === index).length !== 0;
    if (hasIndex)
      setWorkouts((w) => w.map((m) => m.index === index ? { ...m, exercises: [...m.exercises, exercise] } : m));
    else {
      let newWorkout = makeWorkout(`${index}${Date.now().toString()}`, index, [exercise]);
      setWorkouts((w) => [...w, newWorkout]);
    }
  }

  const getExercise = (id: string, index: number) => {
    const workoutsForIndex = workouts.filter((w) => w.index === index);
    if (workoutsForIndex.length === 0)
      return undefined;

    const workout = workoutsForIndex[0];

    const exercise = workout.exercises.filter((e) => e.id === id);
    if (exercise.length === 0)
      return undefined;

    return exercise[0];
  }

  const updateExercise = (index: number, exercise: ExerciseData) => {
    let searchWorkout = workouts.filter((w) => w.index === index);
    if (searchWorkout.length === 0)
      return false;

    let thisWorkout = searchWorkout[0];

    let exerciseIndex = thisWorkout.exercises.findIndex((e) => e.id === exercise.id);
    if (exerciseIndex === -1)
      return false;

    let newExercises = thisWorkout.exercises.filter((e) => e.id !== exercise.id);
    newExercises.splice(exerciseIndex, 0, exercise);
    thisWorkout.exercises = newExercises;

    setWorkouts((w) => w.map((wi) => wi.index !== index ? { ...wi } : { ...thisWorkout }));
    return true;
  }

  return (
    <WorkoutDataContext.Provider value={{ title, setTitle, workouts, setWorkouts, addWorkout, getWorkout, getExercise, addExercise, updateExercise }} >
      {children}
    </WorkoutDataContext.Provider>
  );
}

export const useWorkoutData = () => {
  const context = useContext(WorkoutDataContext);
  if (!context) {
    throw new Error("Context must be used within a WorkoutDataProvider");
  }
  return context;
};
