import { useParams } from "react-router";
import { InternalData } from "../../components/Week/Week";
import Statistics from "../../components/Statistics/Statistics";

function DetailsPage() {
  const { id } = useParams();
  let json: InternalData | undefined = undefined;
  if (id) {
    const data = localStorage.getItem(id);
    if (data) {
      json = JSON.parse(data) as InternalData;
    }
  }
  if (json) {
    return <Statistics data={json} />;
  } else {
    return <>No data</>;
  }
}

export default DetailsPage;
