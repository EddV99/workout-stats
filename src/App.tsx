import "./App.css";
import Header from "./components/Header/Header";
import Week from "./components/Week/Week";

function App() {
  return (
    <>
      <Header />
      <div id="content">
        <Week />
      </div>
    </>
  );
}

export default App;
