import { useEffect, useState } from "react";
import { ExerciseData, makeWorkout, WorkoutData } from "../data/data";


export default function useWorkoutData(id: string) {
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
  }, [title, workouts]);

  const addExercise = (index: number, exercise: ExerciseData) => {
    let hasIndex = workouts.filter((w) => w.index === index).length !== 0;
    if (hasIndex)
      setWorkouts((w) => w.map((m) => m.index === index ? { ...m, exercises: [...m.exercises, exercise] } : m));
    else {
      let newWorkout = makeWorkout(`${index}${Date.now().toString()}`, index, [exercise]);
      setWorkouts((w) => [...w, newWorkout]);
    }
  }

  return { title, setTitle, workouts, setWorkouts, addExercise };
}
