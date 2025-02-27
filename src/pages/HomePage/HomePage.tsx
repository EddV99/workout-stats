import Header from "../../components/Header/Header";
import Week, { InternalData } from "../../components/Week/Week";
import Styles from "./HomePage.module.css";

function HomePage() {
  const getOldStats = (id: string): InternalData | undefined => {
    const s = localStorage.getItem(id);
    if (s) {
      return JSON.parse(s);
    } else {
      return undefined;
    }
  };

  return (
    <>
      <Header />
      <div id={Styles.content}>
        <Week id="1" data={getOldStats("1")} />
      </div>
    </>
  );
}

export default HomePage;
