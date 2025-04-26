import { Muscle } from "./body";

export interface InternalData {
  title: string;
  workouts: WorkoutData[];
}

export interface WorkoutData {
  id: string;
  index: number;
  exercises: ExerciseData[];
}

export interface ExerciseData {
  id: string;
  name: string;
  group: Muscle;
  reps: number;
  sets: number;
}

export function makeDay(id: string, index: number, workouts: ExerciseData[]): WorkoutData {
  return { id, index, exercises: workouts };
}

export function makeWorkout(id: string, name: string, group: Muscle, reps: number, sets: number): ExerciseData {
  return { id, name, group, reps, sets };
}
