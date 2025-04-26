import "./App.css";
import { WorkoutDataProvider } from "./context/WorkoutDataContext";
import Router from "./router/Router";

function App() {
  return (
    <WorkoutDataProvider id="1">
      <Router />
    </WorkoutDataProvider>
  );
}

export default App;
