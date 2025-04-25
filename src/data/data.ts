import { Muscle } from "./body";

export interface InternalData {
  title: string;
  days: DayData[];
}

export interface DayData {
  id: string;
  index: number;
  workouts: WorkoutData[];
}

export interface WorkoutData {
  id: string;
  name: string;
  group: Muscle;
  reps: number;
  sets: number;
}

export function defaultData(): InternalData {
  return { title: "Workout", days: [] };
}

export function makeDay(id: string, index: number, workouts: WorkoutData[]): DayData {
  return { id, index, workouts };
}

export function makeWorkout(id: string, name: string, group: Muscle, reps: number, sets: number): WorkoutData {
  return { id, name, group, reps, sets };
}
