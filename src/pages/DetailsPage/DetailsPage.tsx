import { useParams } from "react-router";
import { Stats } from "../../components/Week/Week";
import { muscleGroups } from "../../muscle/body";

interface Statistics {
  // does this have any relevant data
  hasData: boolean;
  // count of times done in a week
  weeklyCount: number;
  // count of total workouts done
  count: number; 
}

function DetailsPage() {
  const parseStats = (data: Stats, g: muscleGroups): Statistics => {
    const filtered = data.workouts.filter((w) => w.group === g);
    if (filtered.length <= 0) {
      return { hasData: false, weeklyCount: 0, count: 0};
    }

    const seen: string[] = [];
    let weeklyCount = 0;
    filtered.map((w) => {
      if (!seen.includes(w.day)) {
        seen.push(w.day);
        weeklyCount++;
      }
    });

    return { hasData: true, weeklyCount, count: filtered.length };
  };

  const { id } = useParams();
  let json: Stats | undefined = undefined;
  if (id) {
    const data = localStorage.getItem(id);
    if (data) {
      json = JSON.parse(data) as Stats;
    }
  }
  if (json) {
    const stats = parseStats(json, muscleGroups.ABS);
    return (<>
      You do {muscleGroups.ABS} {stats.weeklyCount} times a week

      You do {stats.count} {muscleGroups.ABS} exercies total 
    </>);
  } else {
    return <>No data</>;
  }
}

export default DetailsPage;
