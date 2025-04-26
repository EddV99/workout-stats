import { useEffect, useState } from "react";
import { DayData, defaultData, InternalData, WorkoutData } from "../data/data";


export default function useWorkoutData(id: string) {
  const [data, setData] = useState<InternalData | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(id);
      if (stored) {
        setData({ ...JSON.parse(stored) });
      } else {
        localStorage.setItem(id, JSON.stringify(defaultData()));
        setData({ ...defaultData() });
      }
    } catch {
      localStorage.setItem(id, JSON.stringify(defaultData()));
      setData({ ...defaultData() });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(data));
  }, [data]);

  const setTitle = (newTitle: string) => {
    if (!data) return;

    setData({ title: newTitle, days: data.days ? [...data.days] : [] });
  };



  return { data, setData, setTitle };
}
