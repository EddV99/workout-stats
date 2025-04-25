import { useEffect, useState } from "react";
import { DayData, defaultData, InternalData } from "../data/data";


export default function useWorkoutData(id: string) {
  let item = localStorage.getItem(id);

  const [data, setData] = useState<InternalData>(item ? JSON.parse(item) : defaultData());

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(data));
  }, [data]);

  const getDayData = (index: number): DayData | undefined => {
    const day = data.days.filter((d) => d.index === index);
    if (day.length !== 1) {
      return undefined;
    } else {
      return day[0];
    }
  };

  const setDayData = (index: number, newDayData: DayData) => {
    const days = data.days.filter((d) => d.index !== index);
    days.push(newDayData);
    setData({ ...data, days });
  };


  return { data, setData, setDayData, getDayData };
}
