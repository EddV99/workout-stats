import { useEffect, useState } from "react";
import { defaultData, InternalData } from "../data/data";


export default function useWorkoutData(id: string) {
  const [data, setData] = useState<InternalData>(defaultData());

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
    setData({ title: newTitle, days: [...data.days] });
  };



  return { data, setData, setTitle };
}
