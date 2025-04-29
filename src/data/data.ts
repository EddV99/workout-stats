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
  primary: Muscle[];
  secondary: Muscle[];
  reps: number;
  sets: number;
}

export function makeWorkout(id: string, index: number, exercises: ExerciseData[]): WorkoutData {
  return { id, index, exercises };
}

export function makeExercise(id: string, name: string, primary: Muscle[], secondary: Muscle[], reps: number, sets: number): ExerciseData {
  return { id, name, primary, secondary, reps, sets };
}
