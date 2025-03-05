import { useParams } from "react-router";
import { InternalData } from "../../components/Week/Week";
import Statistics from "../../components/Statistics/Statistics";
import Styles from "./DetailsPage.module.css";

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
    return (
      <div id={Styles.container}>
        <span id={Styles.title}>{json.title}</span>
        <Statistics data={json} />
      </div>
    );
  } else {
    return <>No data</>;
  }
}

export default DetailsPage;
