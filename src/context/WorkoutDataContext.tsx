import { useEffect, useState, createContext, useContext } from "react";
import { ExerciseData, makeWorkout, WorkoutData } from "../data/data";


interface WorkoutContextType {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  workouts: WorkoutData[]
  setWorkouts: React.Dispatch<React.SetStateAction<WorkoutData[]>>
  addExercise: (index: number, exercise: ExerciseData) => void
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

  const addExercise = (index: number, exercise: ExerciseData) => {
    let hasIndex = workouts.filter((w) => w.index === index).length !== 0;
    if (hasIndex)
      setWorkouts((w) => w.map((m) => m.index === index ? { ...m, exercises: [...m.exercises, exercise] } : m));
    else {
      let newWorkout = makeWorkout(`${index}${Date.now().toString()}`, index, [exercise]);
      setWorkouts((w) => [...w, newWorkout]);
    }
  }

  return (
    <WorkoutDataContext.Provider value={{ title, setTitle, workouts, setWorkouts, addExercise }} >
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
