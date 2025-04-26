import { useEffect, useState } from "react";
import { WorkoutData } from "../data/data";


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


  return { title, setTitle, workouts, setWorkouts };
}
