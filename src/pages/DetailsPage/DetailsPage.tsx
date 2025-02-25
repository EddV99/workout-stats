import { useParams } from "react-router";
import { Stats } from "../../components/Week/Week";
import { muscleGroups } from "../../muscle/body";

interface Statistics {
  // does this have any relevant data
  hasData: boolean;
  // count of times done in a week
  weeklyCount: number;
}
function DetailsPage() {
  const parseStats = (data: Stats, g: muscleGroups): Statistics => {
    const filtered = data.workouts.filter((w) => w.group === g);
    if (filtered.length <= 0) {
      return { hasData: false, weeklyCount: 0 };
    }

    const seen: string[] = [];
    let weeklyCount = 0;
    filtered.map((w) => {
      if (!seen.includes(w.day)) {
        seen.push(w.day);
        weeklyCount++;
      }
    });

    return { hasData: true, weeklyCount };
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
    return <>You do abs {stats.weeklyCount} times a week</>;
  } else {
    return <>No data</>;
  }
}

export default DetailsPage;
