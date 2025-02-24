import "./App.css";
import Header from "./components/Header/Header";
import Week, { Stats } from "./components/Week/Week";

function App() {
  const getOldStats = (id: string): Stats | undefined => {
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
      <div id="content">
        <Week id="1" loadStat={getOldStats("1")} />
      </div>
    </>
  );
}

export default App;
